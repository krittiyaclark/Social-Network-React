import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import SignedOutMenu from '../SignedOutMenu'
import SignedInMenu from '../SignedInMenu'

function NavBar() {
	const { authenticated } = useSelector((state) => state.auth)

	return (
		<>
			<Menu inverted fixed='top'>
				<Container>
					<Menu.Item as={NavLink} exact to='/' header>
						<img
							src='/assets/logo.png'
							alt='logo'
							style={{ marginRight: 15 }}
						/>
						Social Network
					</Menu.Item>
					<Menu.Item as={NavLink} to='/events' name='Events' />
					{authenticated && (
						<Menu.Item as={NavLink} to='/createEvent'>
							<Button positive inverted content='Create Event'></Button>
						</Menu.Item>
					)}
					{authenticated ? <SignedInMenu /> : <SignedOutMenu />}
				</Container>
			</Menu>
		</>
	)
}

export default NavBar
