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
		<Segment textAlign='left' vertical className='masthead'>
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as='h1' inverted size='huge'>
							<Image
								size='massive'
								src='/assets/logo.png'
								style={{ marginBottom: 12 }}
							/>
						</Header>
						<Item.Content>
							<Header as='h1' size='large' className='subhead' color='black'>
								Host your virtual events that matter to you
							</Header>
						</Item.Content>
						<RegisterForm />
						<p className='homepage-font-size link'>
							Already have an account?{' '}
							<Menu.Item as={NavLink} to='/login'>
								Login
							</Menu.Item>
						</p>

						<Button
							onClick={() => history.push('/events')}
							size='huge'
							color='teal'>
							Get started
							<Icon name='right arrow' inverted />
						</Button>
					</Grid.Column>

					<Grid.Column width={8}>
						<Image src='../../assets/Zoom-Meeting.svg' size='massive' />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	)
}

export default HomePage
