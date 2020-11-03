import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../../app/common/form/MyTextInput'
import { Button, Label, Divider } from 'semantic-ui-react'
import { signInWithEmail } from '../../app/firestore/firebaseService'
import SocialLogin from './SocialLogin'
import { useHistory } from 'react-router-dom'

function LoginForm() {
	const history = useHistory()

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={Yup.object({
				email: Yup.string().required().email(),
				password: Yup.string().required(),
			})}
			onSubmit={async (values, { setSubmitting, setErrors }) => {
				try {
					await signInWithEmail(values)
					setSubmitting(false)
					history.push('/events')
				} catch (error) {
					setErrors({ auth: 'Problem with useramen or password' })
					setSubmitting(false)
				}
			}}>
			{({ isSubmitting, isValid, dirty, errors }) => (
				<Form className='ui form'>
					<MyTextInput name='email' placeholder='Email Address*' />
					<MyTextInput
						name='password'
						placeholder='Password*'
						type='password'
					/>
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
						content='Login'
					/>
					<Divider horizontal>Or</Divider>
					<SocialLogin />
				</Form>
			)}
		</Formik>
	)
}

export default LoginForm
