import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../app/common/modals/modalReducer'
import { NavLink } from 'react-router-dom'

function SignedOutMenu({ setAuthenticated }) {
	// const dispatch = useDispatch()
	return (
		<Menu.Item position='right'>
			<Menu.Item as={NavLink} to='/login'>
				<Button
					// onClick={() => dispatch(openModal({ modalType: 'LoginForm' }))}
					basic
					inverted
					content='Login'
				/>
			</Menu.Item>
			<Menu.Item as={NavLink} to='/register'>
				<Button
					// onClick={() => dispatch(openModal({ modalType: 'RegisterForm' }))}
					basic
					inverted
					content='Register'
					style={{ marginLeft: '0.5em' }}
				/>
			</Menu.Item>
		</Menu.Item>
	)
}

export default SignedOutMenu
