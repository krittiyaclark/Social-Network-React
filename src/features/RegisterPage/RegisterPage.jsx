import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Header, Icon, Menu, Message, Segment } from 'semantic-ui-react'
import RegisterForm from '../auth/RegisterForm'

function RegisterPage() {
	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column mobile={16} tablet={8} computer={8}>
				<Header as='h1' icon textAlign='center' size='huge' color='black'>
					<Icon name='users' circular />
					<Header.Content>Create your account</Header.Content>
				</Header>
				<Segment stacked>
					<RegisterForm />
				</Segment>
				<Message>
					Already have an account?{' '}
					<Menu.Item as={NavLink} to='/login'>
						Log in
					</Menu.Item>
				</Message>
			</Grid.Column>
		</Grid>
	)
}

export default RegisterPage
