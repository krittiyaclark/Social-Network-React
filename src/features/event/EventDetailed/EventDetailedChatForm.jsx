import React from 'react'
import { Formik, Form } from 'formik'
import { addEventChatComment } from '../../../app/firestore/firebaseService'
import { toast } from 'react-toastify'
import { Button } from 'semantic-ui-react'
import MyTextArea from '../../../app/common/form/MyTextArea'

function EventDetailedChatForm({ eventId }) {
	return (
		<Formik
			initialValues={{ comment: '' }}
			onSubmit={async (values, { setSubmmiting, resetForm }) => {
				try {
					await addEventChatComment(eventId, values.comment)
					resetForm()
				} catch (error) {
					toast.error(error.message)
				} finally {
					setSubmmiting(false)
				}
			}}>
			{({ isSubmmiting }) => (
				<Form className='ui form'>
					<MyTextArea
						name='comment'
						placeholder='Enter your comment (Enter to submit, SHIFT + Enter for new line)'
						row={2}
					/>
					<Button
						loading={isSubmmiting}
						content='Add Reply'
						labelPosition='left'
						icon='edit'
						primary
					/>
				</Form>
			)}
		</Formik>
	)
}

export default EventDetailedChatForm
