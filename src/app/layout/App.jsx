import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'

function App() {
	const [formOpen, setFormOpen] = useState(false)

	return (
		<>
			<NavBar setFormOpen={setFormOpen} />
			<Container className='main'>
				<EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
			</Container>
		</>
	)
}

export default App
