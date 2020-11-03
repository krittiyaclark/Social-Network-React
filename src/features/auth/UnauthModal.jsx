import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Modal, Button, Divider } from 'semantic-ui-react'

function UnauthModal({ history, setModalOpen }) {
	const [open, setOpen] = useState(true)
	const { prevLocation } = useSelector((state) => state.auth)
	// const dispatch = useDispatch()

	function handleClose() {
		if (!history) {
			setOpen(false)
			setModalOpen(false)
			return
		}
		if (history && prevLocation) {
			history.push(prevLocation.pathname)
		} else {
			history.push('/events')
		}
		setOpen(false)
	}

	// function handleOpenLoginModal(modalType) {
	// 	dispatch(openModal({ modalType }))
	// 	setOpen(false)
	// 	setModalOpen(false)
	// }

	return (
		<Modal open={open} size='mini' onClose={handleClose}>
			<Modal.Header
				content='You need to be signed in to do that'
				style={{ textAlign: 'center' }}
			/>
			<Modal.Content>
				<p style={{ textAlign: 'center' }}>
					Please either login or register to see this content
				</p>
				<Button.Group widths={4}>
					<Button fluid color='teal' content='Login' as={NavLink} to='/login' />
					<Button.Or />
					<Button
						fluid
						color='green'
						content='Register'
						as={NavLink}
						to='/register'
						style={{ marginLeft: '0.5em' }}
					/>
				</Button.Group>
				<Divider />
				<div style={{ textAlign: 'center' }}>
					<p>Or click cancel to continue as a guest</p>
					<Button onClick={handleClose} content='Cancel' />
				</div>
			</Modal.Content>
		</Modal>
	)
}

export default UnauthModal
