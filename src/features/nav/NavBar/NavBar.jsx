import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import SignedOutMenu from '../SignedOutMenu'
import SignedInMenu from '../SignedInMenu'
import { Button, Container, Menu, Icon, Responsive } from 'semantic-ui-react'

function NavBar({ onToggle }) {
	const { authenticated } = useSelector((state) => state.auth)

	return (
		<>
			<Responsive {...Responsive.onlyMobile}>
				<Menu fixed='top'>
					<Container>
						<Menu.Item as={NavLink} exact to='/' header>
							<img
								src='/assets/logo.png'
								alt='logo'
								style={{ marginRight: 15 }}
							/>
							Social Network
						</Menu.Item>
						<Menu.Item onClick={onToggle}>
							<Icon name='sidebar' />
						</Menu.Item>
					</Container>
				</Menu>
			</Responsive>

			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Menu fixed='top'>
					<Container>
						<Menu.Item as={NavLink} exact to='/' header>
							<img
								src='/assets/logo.png'
								alt='logo'
								style={{ marginRight: 15 }}
							/>
							Social Network
						</Menu.Item>
						{!authenticated && (
							<Menu.Item as={NavLink} to='/about' name='About' />
						)}
						<Menu.Item as={NavLink} to='/events' name='Events' />
						{authenticated && (
							<Menu.Item as={NavLink} to='/createEvent'>
								<Button positive inverted content='Create Event'></Button>
							</Menu.Item>
						)}
						{authenticated ? <SignedInMenu /> : <SignedOutMenu />}
					</Container>
				</Menu>
			</Responsive>
		</>
	)
}

export default NavBar
