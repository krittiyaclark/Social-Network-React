import React, { useState } from 'react'
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
import Sidebarnav from '../../features/nav/Sidebarnav'
import LoginPage from '../../features/loginPage/LoginPage'
import RegisterPage from '../../features/registerPage/RegisterPage'
import AboutPage from '../../features/about/AboutPage'
import Recovery from '../../features/recoveryPage/RecoveryPage'


function App() {
	const { key } = useLocation()
	const { initialized } = useSelector((state) => state.async)
	const [isOpen, setOpen] = useState(false)
	const { currentUser } = useSelector((state) => state.auth)

	if (!initialized) return <LoadingComponent content='Loading app...' />

	const handleToggle = () => setOpen(!isOpen)

	return (
		<>
			<ModalManager />
			<ToastContainer position='bottom-right' hideProgressBar />
			<Route exact path='/' component={HomePage} />
			<Route
				path={'/(.+)'}
				render={() => (
					<>
						<NavBar onToggle={handleToggle} />
						<Sidebarnav onToggle={isOpen} />
						<PrivateRoute>
							<Route exact path='/about' component={AboutPage} />
						</PrivateRoute>
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
							<PrivateRoute>
								<Route exact path='/login' component={LoginPage} />
							</PrivateRoute>
							<PrivateRoute>
								<Route exact path='/register' component={RegisterPage} />
							</PrivateRoute>
							<Route path='/recovery' component={Recovery} />
							<Route path='/error' component={ErrorComponent} />
						</Container>
					</>
				)}
			/>
		</>
	)
}

export default App
