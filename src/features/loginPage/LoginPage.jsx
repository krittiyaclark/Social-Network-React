import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Header, Icon, Menu, Message, Segment } from 'semantic-ui-react'
import LoginForm from '../../features/auth/LoginForm'

function LoginPage() {
	// const { currentUser } = useSelector((state) => state.auth)

	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column mobile={16} tablet={8} computer={8}>
				<Header as='h1' icon textAlign='center' size='huge' color='black'>
					<Icon name='users' circular />
					<Header.Content>Welcome back!</Header.Content>
				</Header>
				<Segment stacked>
					<LoginForm />
				</Segment>
				<Message>
					New to us?{' '}
					<Menu.Item as={NavLink} to='/register'>
						Sign Up
					</Menu.Item>
				</Message>

				<Message>
					<Menu.Item as={NavLink} to='/recovery'>
						Forgot your Password?
					</Menu.Item>
				</Message>
			</Grid.Column>
		</Grid>
	)
}

export default LoginPage
