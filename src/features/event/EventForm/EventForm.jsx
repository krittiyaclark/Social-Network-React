/* global google */
import React, { useState, useEffect } from 'react'
import { Segment, Button, Header, Confirm } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
// import CKEditor from 'ckeditor4-react'

import { clearSelectedEvent, listenToSelectedEvent } from '../eventActions'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import { categoryData } from '../../../app/api/categoryOptions'
import MyDateInput from '../../../app/common/form/MyDateInput'
import MyPlaceInput from '../../../app/common/form/MyPlaceInput'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc'
import {
	listenToEventFromFirestore,
	updateEventInFirestore,
	addEventToFirestore,
	cancelEventToggle,
} from '../../../app/firestore/firestoreService'

function EventForm({ match, history, location }) {
	const dispatch = useDispatch()
	const [loadingCancel, setLoadingCancel] = useState(false)
	const [confirmOpen, setConfirmOpen] = useState(false)
	const { selectedEvent } = useSelector((state) => state.event)
	const { loading, error } = useSelector((state) => state.async)
	const [eventDesc, setEventDesc] = useState('')

	useEffect(() => {
		if (location.pathname !== '/createEvent') return
		dispatch(clearSelectedEvent())
	}, [dispatch, location.pathname])

	const initialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		link: '',
		eventNameLink: '',
		date: '',
	}

	const validationSchema = Yup.object({
		title: Yup.string().required('You must provide a title'),
		category: Yup.string().required('You must provide a category'),
		description: Yup.string().required(),
		link: Yup.string().required('You must provide a link'),
		eventNameLink: Yup.string().required('You must provide an event name link'),
		date: Yup.string().required(),
	})

	async function handleCancelToggle(event) {
		setConfirmOpen(false)
		setLoadingCancel(true)
		try {
			await cancelEventToggle(event)
			setLoadingCancel(false)
		} catch (error) {
			setLoadingCancel(true)
			toast.error(error.message)
		}
	}

	useFirestoreDoc({
		shouldExecute:
			match.params.id !== selectedEvent?.id &&
			location.pathname !== '/createEvent',
		query: () => listenToEventFromFirestore(match.params.id),
		data: (event) => dispatch(listenToSelectedEvent(event)),
		deps: [match.params.id, dispatch],
	})

	if (loading) return <LoadingComponent content='Loading event...' />

	if (error) return <Redirect to='/error' />

	return (
		<Segment clearing>
			<Formik
				enableReinitialize
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						selectedEvent
							? await updateEventInFirestore(values)
							: await addEventToFirestore(values)
						history.push('/events')
					} catch (error) {
						toast.error(error.message)
						setSubmitting(false)
					}
				}}>
				{({ isSubmitting, dirty, isValid, values }) => (
					<Form className='ui form'>
						<Header sub color='teal' content='Event Detail' />
						<MyTextInput name='title' placeholder='Event title' />
						<MySelectInput
							name='category'
							placeholder='Category'
							options={categoryData}
						/>
						<Header sub color='teal' content='Host Event Description' />

						<MyTextArea name='description' placeholder='Description' row={3} />
						<Header sub color='teal' content='Host Event Link' />
						<MyTextInput name='link' placeholder='Event Link' />
						<MyTextInput
							name='eventNameLink'
							placeholder='Event Name Link'></MyTextInput>

						{/* <MyPlaceInput name='city' placeholder='City' />
						<MyPlaceInput
							name='venue'
							disabled={!values.city.latLng}
							placeholder='Venue'
							options={{
								location: new google.maps.LatLng(values.city.latLng),
								radius: 1000,
								types: ['establishment'],
							}}
						/> */}
						<MyDateInput
							name='date'
							placeholderText='Event date'
							timeFormat='HH:mm'
							showTimeSelect
							timeCaption='time'
							dateFormat='MMMM d, yyyy h:mm a'
							autoComplete='off'
						/>
						{selectedEvent && (
							<Button
								loading={loadingCancel}
								type='button'
								floated='left'
								color={selectedEvent.isCancelled ? 'green' : 'red'}
								content={
									selectedEvent.isCancelled
										? 'Reactivate Event'
										: 'Cancel Event'
								}
								onClick={() => setConfirmOpen(true)}
							/>
						)}
						<Button
							loading={isSubmitting}
							disabled={!isValid || !dirty || isSubmitting}
							type='submit'
							floated='right'
							positive
							content='Submit'
						/>
						<Button
							disabled={isSubmitting}
							as={Link}
							to='/events'
							type='submit'
							floated='right'
							content='Cancel'
						/>
					</Form>
				)}
			</Formik>
			<Confirm
				content={
					selectedEvent?.isCancelled
						? 'This will reactivate the event - are you sure?'
						: 'This will cancel the event - are you sure?'
				}
				open={confirmOpen}
				onCancel={() => setConfirmOpen(false)}
				onConfirm={() => handleCancelToggle(selectedEvent)}
			/>
		</Segment>
	)
}

export default EventForm
