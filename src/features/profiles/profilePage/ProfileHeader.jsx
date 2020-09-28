import React, { useState } from 'react'
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
import { followUser } from '../../../app/firestore/firestoreService'
import { toast } from 'react-toastify'

function ProfileHeader({ profile, isCurrentUser }) {
	const [loading, setLoading] = useState(false)

	async function handleFollowerUser() {
		setLoading(true)
		try {
			await followUser(profile)
		} catch (error) {
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}
	return (
		<Segment>
			<Grid>
				<Grid.Column width={12}>
					<Item.Group>
						<Item>
							<Item.Image
								avatar
								size='small'
								src={profile.photoURL || '/assets/user.png'}
							/>
							<Item.Content verticalAlign='middle'>
								<Header
									as='h1'
									style={{ display: 'block', marginBottom: 10 }}
									content={profile.displayName}
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
					{isCurrentUser && (
						<>
							<Divider />
							<Reveal animated='move'>
								<Reveal.Content visible style={{ width: '100%' }}>
									<Button fluid color='teal' content='Following' />
								</Reveal.Content>
								<Reveal.Content hidden style={{ width: '100%' }}>
									<Button
										onClick={handleFollowerUser}
										loading={loading}
										fluid
										color='green'
										content='follow'
									/>
								</Reveal.Content>
							</Reveal>
						</>
					)}
				</Grid.Column>
			</Grid>
		</Segment>
	)
}

export default ProfileHeader
