import React from 'react'
import {
	Segment,
	Grid,
	Item,
	Header,
	Statistic,
	Divider,
	Reveal,
	Button,
} from 'semantic-ui-react'

function ProfileHeader() {
	return (
		<Segment>
			<Grid>
				<Grid.Column width={12}>
					<Item.Group>
						<Item>
							<Item.Image avatar size='small' src='/assets/user.png' />
							<Item.Content verticalAlign='middle'>
								<Header
									as='h1'
									style={{ display: 'block', marginBottom: 10 }}
									content='Display name'
								/>
							</Item.Content>
						</Item>
					</Item.Group>
				</Grid.Column>
				<Grid.Column width={4}>
					<Statistic.Group>
						<Statistic label='followers' value={10} />
						<Statistic label='following' value={5} />
					</Statistic.Group>
					<Divider />
					<Reveal animated='move'>
						<Reveal.Content visible style={{ width: '100%' }}>
							<Button fluid color='teal' content='Following' />
						</Reveal.Content>
						<Reveal.Content hidden style={{ width: '100%' }}>
							<Button fluid color='teal' content='Unfollow' />
						</Reveal.Content>
					</Reveal>
				</Grid.Column>
			</Grid>
		</Segment>
	)
}

export default ProfileHeader
