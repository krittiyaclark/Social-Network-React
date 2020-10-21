import React, { useState } from 'react'
import { Segment, Button, Grid, Icon } from 'semantic-ui-react'
import { format } from 'date-fns'

function EventDetailedInfo({ event }) {
	return (
		<Segment.Group>
			<Segment attached='top'>
				<Grid>
					<Grid.Column width={1}>
						<Icon size='large' color='teal' name='info' />
					</Grid.Column>
					<Grid.Column width={15}>
						<p>{event.description}</p>
					</Grid.Column>
					<Grid.Column width={1}>
						<Icon size='large' color='teal' name='linkify' />
					</Grid.Column>
					<Grid.Column width={15}>
						<p>
							<a href={event.link} target='_blank' rel='noopener noreferrer'>
								{event.eventNameLink}
							</a>
						</p>
					</Grid.Column>
				</Grid>
			</Segment>
			<Segment attached>
				<Grid verticalAlign='middle'>
					<Grid.Column width={1}>
						<Icon name='calendar' size='large' color='teal' />
					</Grid.Column>
					<Grid.Column width={15}>
						<span>{format(event.date, 'MMMM d, yyyy h:mm a')}</span>
					</Grid.Column>
				</Grid>
			</Segment>
		</Segment.Group>
	)
}

export default EventDetailedInfo
