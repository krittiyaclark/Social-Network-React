import React from 'react'
import { Formik, Form, Field } from 'formik'
import { addEventChatComment } from '../../../app/firestore/firebaseService'
import { toast } from 'react-toastify'
import { Button, Loader } from 'semantic-ui-react'
import MyTextArea from '../../../app/common/form/MyTextArea'
import * as Yup from 'yup'

function EventDetailedChatForm({ eventId, parentId, closeForm }) {
	return (
		<Formik
			initialValues={{ comment: '' }}
			validationSchema={Yup.object({
				comment: Yup.string().required(),
			})}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				try {
					await addEventChatComment(eventId, { ...values, parentId })
					resetForm()
				} catch (error) {
					toast.error(error.message)
				} finally {
					setSubmitting(false)
					closeForm({ open: false, commentId: null })
				}
			}}>
			{({ isSubmmiting, handleSubmit, isValid }) => (
				<Form className='ui form'>
					<Field name='comment'>
						{({ field }) => (
							<div style={{ position: 'relative' }}>
								<Loader active={isSubmmiting} />
								<textarea
									row='2'
									{...field}
									placeholder='Enter your comment (Enter to submit, SHIFT + Enter for new line)'
									onKeyPress={(e) => {
										if (e.key === 'Enter' && e.shiftKey) {
											return
										}
										if (e.key === 'Enter' && !e.shiftKey) {
											e.preventDefault()
											isValid && handleSubmit()
										}
									}}></textarea>
							</div>
						)}
					</Field>
				</Form>
			)}
		</Formik>
	)
}

export default EventDetailedChatForm
