import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Feed, Header, Segment } from 'semantic-ui-react'

import { listenToFeed } from '../../profiles/profileAction'
import {
	getUserFeedRef,
	firebaseObjectToArray,
} from '../../../app/firestore/firebaseService'
import EventFeedItem from './EventFeedItem'

function EventFeed() {
	const dispatch = useDispatch()
	const { feed } = useSelector((state) => state.profile)

	useEffect(() => {
		getUserFeedRef().on('value', (snapshot) => {
			if (!snapshot.exists()) {
				return
			}
			const feed = firebaseObjectToArray(snapshot.val()).reverse()
			dispatch(listenToFeed(feed))
		})
		return () => {
			getUserFeedRef().off()
		}
	}, [dispatch])

	return (
		<>
			<Header attached color='teal' icon='newspaper' content='News feed' />
			<Segment attached='bottom'>
				<Feed>
					{feed &&
						feed.map((post) =>
							post.length ? (
								'No Event'
							) : (
								<EventFeedItem post={post} key={post.id} />
							)
						)}
				</Feed>
			</Segment>
		</>
	)
}

export default EventFeed
