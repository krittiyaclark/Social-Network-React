import React from 'react'
import {
	Segment,
	Header,
	Image,
	Button,
	Icon,
	Item,
	Grid,
	Menu,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import RegisterForm from '../auth/RegisterForm'

function HomePage({ history }) {
	return (
		<Segment inverted textAlign='left' vertical className='masthead'>
			{/* <Container> */}
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column width={10}>
						<Header as='h1' inverted size='huge'>
							<Image
								size='massive'
								src='/assets/logo.png'
								style={{ marginBottom: 12 }}
							/>
						</Header>
						<Item.Content>
							<Header as='h1' size='large' className='subhead'>
								Meet people on virtual event
							</Header>
						</Item.Content>
						<Item.Content>
							<p className='homepage-font-size'>
								Host Your Virtual Event And Share With Your Friends
							</p>
						</Item.Content>

						<Button
							onClick={() => history.push('/events')}
							size='huge'
							inverted>
							Get started
							<Icon name='right arrow' inverted />
						</Button>
					</Grid.Column>

					<Grid.Column width={6}>
						<RegisterForm />
						<p className='homepage-font-size link'>
							Already have an account?{' '}
							<Menu.Item as={NavLink} to='/login'>
								Login
							</Menu.Item>
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			{/* </Container> */}
		</Segment>
	)
}

export default HomePage
