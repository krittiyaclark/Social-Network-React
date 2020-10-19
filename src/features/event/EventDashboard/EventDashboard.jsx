import React, { useState, useEffect } from 'react'
import { Grid, Loader } from 'semantic-ui-react'

import EventList from './EventList'
import { useSelector, useDispatch } from 'react-redux'
import EventListItemPlaceholder from './EventListItemPlaceholder'
import EventFilters from './EventFilters'
import { fetchEvents } from '../eventActions'
import EventFeed from './EventFeed'
import { RETAIN_STATE } from '../eventConstants'

function EventDashboard() {
	const limit = 2
	const dispatch = useDispatch()
	const {
		events,
		moreEvents,
		filter,
		startDate,
		lastVisible,
		retainState,
	} = useSelector((state) => state.event)
	const { loading } = useSelector((state) => state.async)
	const { authenticated } = useSelector((state) => state.auth)
	const [loadingInitial, setLoadingInitial] = useState(false)

	useEffect(() => {
		if (retainState) return
		setLoadingInitial(true)
		dispatch(fetchEvents(filter, startDate, limit)).then((lastVisible) => {
			setLoadingInitial(false)
		})
		return () => {
			dispatch({ type: RETAIN_STATE })
		}
	}, [dispatch, filter, startDate, retainState])

	function handleFetchNextEvents() {
		dispatch(fetchEvents(filter, startDate, limit, lastVisible))
	}

	return (
		<Grid>
			<Grid.Column mobile={16} tablet={5} computer={10}>
				{loadingInitial && (
					<>
						<EventListItemPlaceholder />
						<EventListItemPlaceholder />
					</>
				)}
				<EventList
					events={events}
					getNextEvents={handleFetchNextEvents}
					loading={loading}
					moreEvents={moreEvents}
				/>
			</Grid.Column>
			<Grid.Column mobile={16} tablet={5} computer={6}>
				{authenticated && <EventFeed />}
				<EventFilters loading={loading} />
			</Grid.Column>
			<Grid.Column mobile={16} tablet={5} computer={10}>
				<Loader active={loading} />
			</Grid.Column>
		</Grid>
	)
}

export default EventDashboard
