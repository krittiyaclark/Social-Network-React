import React from 'react'
import { Grid } from 'semantic-ui-react'
import ProfileHeader from './ProfileHeader'
import ProfileContent from './ProfileContent'

function profilePage() {
	return (
		<Grid>
			<Grid.Column width={16}>
				<ProfileHeader />
				<ProfileContent />
			</Grid.Column>
		</Grid>
	)
}

export default profilePage
