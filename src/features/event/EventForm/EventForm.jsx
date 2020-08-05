import React, { useState } from 'react'
import { Segment, Button, Header, FormField, Label } from 'semantic-ui-react'
import cuid from 'cuid'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateEvent, createEvent } from '../eventActions'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function EventForm({ match, history }) {
	const dispatch = useDispatch()

	const selectedEvent = useSelector((state) =>
		state.event.events.find((e) => e.id === match.params.id)
	)
	const initialValues = selectedEvent ?? {
		title: '',
		category: '',
		description: '',
		city: '',
		venue: '',
		date: '',
	}

	const validationSchema = Yup.object({
		title: Yup.string().required('You must provide a title'),
		category: Yup.string().required('You must provide a category'),
		description: Yup.string().required(),
		city: Yup.string().required(),
		venue: Yup.string().required(),
		date: Yup.string().required(),
	})
	// function handleFormSubmit() {
	// 	selectedEvent
	// 		? dispatch(updateEvent({ ...selectedEvent, ...values }))
	// 		: dispatch(
	// 				createEvent({
	// 					...values,
	// 					id: cuid(),
	// 					hostedBy: 'Bob',
	// 					attendees: [],
	// 					hostPhotoURL: '/assets/user.png',
	// 				})
	// 		  )
	// 	history.push('/events')
	// }

	return (
		<Segment clearing>
			<Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => console.log(values)}>
				{({ values, handleChange, handleSubmit }) => (
					<Form className='ui form' onSubmit={handleSubmit}>
						<FormField>
							<Field name='title' placeholder='Event title' />
							<ErrorMessage
								name='title'
								render={(error) => <Label basic color='red' content={error} />}
							/>
						</FormField>
						<FormField>
							<Field name='category' placeholder='Category' />
						</FormField>
						<FormField>
							<Field name='description' placeholder='Description' />
						</FormField>
						<FormField>
							<Field name='city' placeholder='City' />
						</FormField>
						<FormField>
							<Field name='venue' placeholder='Venue' />
						</FormField>
						<FormField>
							<Field name='date' placeholder='Event Date' type='date' />
						</FormField>
						<Button type='submit' floated='right' positive content='Submit' />
						<Button
							as={Link}
							to='/events'
							type='submit'
							floated='right'
							content='Cancel'
						/>
					</Form>
				)}
			</Formik>
		</Segment>
	)
}

export default EventForm
