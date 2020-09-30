import React, { useState } from 'react'
import { Tab } from 'semantic-ui-react'
import AboutTab from './AboutTab'
import PhotosTab from './PhotosTab'
import EventsTab from './EventsTab'
import FolloweringTab from './FolloweringTab'

function ProfileContent({ profile, isCurrentUser }) {
	const [activeTab, setActiveTab] = useState(0)
	const panes = [
		{
			menuItem: 'About',
			render: () => (
				<AboutTab profile={profile} isCurrentUser={isCurrentUser} />
			),
		},
		{
			menuItem: 'Photos',
			render: () => (
				<PhotosTab profile={profile} isCurrentUser={isCurrentUser} />
			),
		},
		{ menuItem: 'Events', render: () => <EventsTab profile={profile} /> },
		{
			menuItem: 'Followers',
			render: () => (
				<FolloweringTab
					key={profile.id}
					profile={profile}
					activeTab={activeTab}
				/>
			),
		},
		{
			menuItem: 'Following',
			render: () => (
				<FolloweringTab
					key={profile.id}
					profile={profile}
					activeTab={activeTab}
				/>
			),
		},
	]
	return (
		<Tab
			menu={{ fluid: true, vertical: true }}
			menuPosition='right'
			panes={panes}
			onTabChange={(e, data) => setActiveTab(data.activeIndex)}
		/>
	)
}

export default ProfileContent
