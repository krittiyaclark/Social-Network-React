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
						<Menu.Item onClick={onToggle}>
							<Icon name='sidebar' />
						</Menu.Item>
					</Container>
				</Menu>
			</Responsive>

			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
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
			</Responsive>
		</>
	)
}

export default NavBar

// <Container>
// 	<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
// 		<Navbar.Brand href='/'>
// 			<img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
// 			Social Network
// 		</Navbar.Brand>
// 		<Navbar.Toggle aria-controls='responsive-navbar-nav' />
// 		<Navbar.Collapse id='responsive-navbar-nav'>
// 			<Nav className='mr-auto'>
// 				<Nav.Link href='/events'>Events</Nav.Link>
// 				{authenticated && (
// 					<Nav.Link href='/createEvent'>Create Event</Nav.Link>
// 				)}
// 			</Nav>
// 			<Nav>{authenticated ? <SignedInMenu /> : <SignedOutMenu />}</Nav>
// 		</Navbar.Collapse>
// 	</Navbar>
// </Container>
