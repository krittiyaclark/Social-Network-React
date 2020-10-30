import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, useLocation } from 'react-router-dom'

import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'
import HomePage from '../../features/home/HomePage'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import EventForm from '../../features/event/EventForm/EventForm'
import ModalManager from '../common/modals/modalManager'
import { ToastContainer } from 'react-toastify'
import ErrorComponent from '../common/errors/ErrorComponent'
import AccountPage from '../../features/auth/AccountPage'
import { useSelector } from 'react-redux'
import LoadingComponent from './LoadingComponent'
import ProfilePage from '../../features/profiles/profilePage/ProfilePage'
import PrivateRoute from './PrivateRoute'

function App() {
	const { key } = useLocation()
	const { initialized } = useSelector((state) => state.async)

	if (!initialized) return <LoadingComponent content='Loading app...' />

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
							<Route path='/events/:id' component={EventDetailedPage} />
							<PrivateRoute
								path={['/createEvent', '/manage/:id']}
								component={EventForm}
								key={key}
							/>
							<PrivateRoute path='/account' component={AccountPage} />
							<PrivateRoute path='/profile/:id' component={ProfilePage} />
							<Route path='/error' component={ErrorComponent} />
						</Container>
					</>
				)}
			/>
		</>
	)
}

export default App
