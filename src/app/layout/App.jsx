import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, useLocation } from 'react-router-dom'

import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import EventForm from '../../features/event/EventForm/EventForm'
import ModalManager from '../common/modals/modalManager'
import Sandbox from '../../features/sandbox/Sandbox'
import { ToastContainer } from 'react-toastify'

function App() {
	const { key } = useLocation()
	return (
		<>
			<ModalManager />
			<ToastContainer position='bottom-right' hideProgressBar />
			<Route exact path='/' component={HomePage} />
			<Route
				path={'/(.+)'}
				render={() => (
					<>
						<NavBar />
						<Container className='main'>
							<Route exact path='/events' component={EventDashboard} />
							<Route exact path='/sandbox' component={Sandbox} />
							<Route path='/events/:id' component={EventDetailedPage} />
							<Route
								path={['/createEvent', '/manage/:id']}
								component={EventForm}
								key={key}
							/>
						</Container>
					</>
				)}
			/>
		</>
	)
}

export default App
