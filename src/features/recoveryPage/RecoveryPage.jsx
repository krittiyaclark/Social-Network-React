import React from 'react'
import { Grid, Header, Icon, Segment } from 'semantic-ui-react'

import EmailPassword from '../emailPassword/EmailPassword'

const Recovery = () => {
	return (
		<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
			<Grid.Column mobile={16} tablet={8} computer={8}>
				<Header as='h1' icon textAlign='center' size='huge' color='black'>
					<Icon name='users' circular />
					<Header.Content>Email Password</Header.Content>
			</Header>
			<p>Provide your account email to receive an email to reset your password.</p>		

			<p>We will reset a forgotten password for you by using your email address. You will receive a link to reset your password within a few moments.</p>
				<Segment stacked>
					<EmailPassword />
				</Segment>
			</Grid.Column>
		</Grid>
	)
}

export default Recovery
