import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Button, Label } from 'semantic-ui-react'
import MyTextInput from '../../app/common/form/MyTextInput'
import { resetPassword } from '../../app/firestore/firebaseService'

const EmailPassword = () => {
	const history = useHistory()
	const [errors, setErrors] = useState('')

	const config = {
		url: 'http://localhost:3000/login'
	}

	return (
		<Formik
			initialValues={{ email: ''}}
			validationSchema={Yup.object({
				email: Yup.string().required().email(),
			})}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(false)
				try {
					await resetPassword(values, config)
					setSubmitting(false)
					history.push('/login')
				} catch (error) {
					setErrors({ auth: error.message })
					setSubmitting(false)
				}
			}}
			>
			{({ isSubmitting, isValid, dirty, errors }) => (
				<Form className='ui form'>
					<MyTextInput name='email' placeholder='Email Address*' />
					{errors.auth && (
						<Label
							basic
							color='red'
							style={{ marginBottom: 10 }}
							content={errors.auth}
						/>
					)}
					<Button
						loading={isSubmitting}
						disabled={!isValid || !dirty || isSubmitting}
						type='submit'
						fluid
						size='massive'
						color='teal'
						content='Send'
					/>
				</Form>
			)}
		</Formik>
	)
}

export default EmailPassword
