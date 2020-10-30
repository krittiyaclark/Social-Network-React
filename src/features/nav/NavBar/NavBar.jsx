import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import SignedOutMenu from '../SignedOutMenu'
import SignedInMenu from '../SignedInMenu'
import {
	Button,
	Container,
	Menu,
	Icon,
	Responsive,
	Image,
} from 'semantic-ui-react'

function NavBar({ onToggle }) {
	const { authenticated } = useSelector((state) => state.auth)
	const [isOpen, setOpen] = useState(false)

	const handleToggle = () => {
		setOpen(!isOpen)
	}
	return (
		<>
			<Responsive {...Responsive.onlyMobile} style={{ marginBottom: 90 }}>
				<Menu fixed='top'>
					<Container>
						<Menu.Item as={NavLink} exact to='/' header>
							<Image
								src='/assets/ViiHost-black.svg'
								alt='logo'
								size='small'
								style={{ marginRight: 15 }}
							/>
						</Menu.Item>
						<Menu.Item onClick={onToggle}>
							<Icon name='sidebar' onClick={handleToggle} />
						</Menu.Item>
					</Container>
				</Menu>
			</Responsive>

			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Menu fixed='top'>
					<Container>
						<Menu.Item as={NavLink} exact to='/' header>
							<Image
								src='/assets/ViiHost-black.svg'
								alt='logo'
								size='small'
								style={{ marginRight: 15 }}
							/>
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
