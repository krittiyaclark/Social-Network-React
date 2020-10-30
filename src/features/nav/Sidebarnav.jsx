import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Button, Image, Menu, Responsive, Sidebar } from 'semantic-ui-react'

import SignedOutMenu from '../nav/SignedOutMenu'
import SignedInMenu from '../nav/SignedInMenu'

function Sidebarnav({ onToggle }) {
	const { authenticated } = useSelector((state) => state.auth)

	return (
		<Responsive {...Responsive.onlyMobile}>
			<Sidebar
				as={Menu}
				animation='overlay'
				icon='labeled'
				vertical
				visible={onToggle}
				width='thin'>
				<Menu.Item as={NavLink} exact to='/' header>
					<Image
						src='/assets/ViiHost-black.svg'
						alt='logo'
						style={{ marginRight: 15 }}
					/>
				</Menu.Item>
				{!authenticated && <Menu.Item as={NavLink} to='/about' name='About' />}
				<Menu.Item as={NavLink} to='/events' name='Events' />
				{authenticated && (
					<Menu.Item as={NavLink} to='/createEvent'>
						<Button positive inverted content='Create Event'></Button>
					</Menu.Item>
				)}
				{authenticated ? <SignedInMenu /> : <SignedOutMenu />}
			</Sidebar>
		</Responsive>
	)
}

export default Sidebarnav
