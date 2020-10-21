import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button, Menu, Sidebar } from 'semantic-ui-react'

import SignedOutMenu from '../nav/SignedOutMenu'
import SignedInMenu from '../nav/SignedInMenu'

function Sidebarnav({ onToggle }) {
	const { authenticated } = useSelector((state) => state.auth)

	return (
		<Sidebar
			as={Menu}
			animation='overlay'
			icon='labeled'
			inverted
			vertical
			visible={onToggle}
			width='thin'>
			<Menu.Item as={NavLink} exact to='/' header>
				<img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
				Social Network
			</Menu.Item>
			<Menu.Item as={NavLink} to='/events' name='Events' />
			{authenticated && (
				<Menu.Item as={NavLink} to='/createEvent'>
					<Button positive inverted content='Create Event'></Button>
				</Menu.Item>
			)}
			{authenticated ? <SignedInMenu /> : <SignedOutMenu />}
		</Sidebar>
	)
}

export default Sidebarnav
