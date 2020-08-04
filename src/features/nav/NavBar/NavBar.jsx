import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

function NavBar({ setFormOpen }) {
	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item as={NavLink} exact to='/' header>
					<img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
					Social Network
				</Menu.Item>
				<Menu.Item as={NavLink} to='/events' name='Events' />
				<Menu.Item as={NavLink} to='/createEvent'>
					<Button
						onClick={() => setFormOpen(true)}
						positive
						inverted
						content='Create Event'></Button>
				</Menu.Item>
				<Menu.Item position='right'>
					<Button basic inverted content='Login' />
					<Button
						basic
						inverted
						content='Register'
						style={{ marginLeft: '0.5em' }}
					/>
				</Menu.Item>
			</Container>
		</Menu>
	)
}

export default NavBar
