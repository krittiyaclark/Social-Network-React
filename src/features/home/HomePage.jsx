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
	Responsive,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import RegisterForm from '../auth/RegisterForm'
import Footer from '../footer/Footer'

function HomePage({ history, onToggle }) {
	return (
		<>
			<Responsive {...Responsive.onlyMobile} style={{ marginBottom: 90 }}>
				<Segment textAlign='center' vertical onClick={onToggle}>
					<Grid container stackable verticalAlign='middle'>
						<Grid.Row>
							<Grid.Column width={8}>
								<Item.Content>
									<Header
										as='h1'
										size='large'
										className='subhead'
										color='black'>
										Host your virtual events that spark your interest
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
				<Footer />
			</Responsive>

			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Segment textAlign='left' vertical className='masthead'>
					<Grid
						container
						stackable
						verticalAlign='middle'
						style={{ height: '100vh' }}>
						<Grid.Row>
							<Grid.Column width={8}>
								<Item.Content>
									<Header
										as='h1'
										size='large'
										className='subhead'
										color='black'>
										Host your virtual events that spark your interest
									</Header>
								</Item.Content>
								<RegisterForm />
								<p className='homepage-font-size link'>
									Already have an account?{' '}
									<Menu.Item as={NavLink} to='/login'>
										Login
									</Menu.Item>
								</p>
							</Grid.Column>

							<Grid.Column width={8}>
								<Image src='../../assets/Zoom-Meeting.svg' size='massive' />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>

				<Footer />
			</Responsive>
		</>
	)
}

export default HomePage
