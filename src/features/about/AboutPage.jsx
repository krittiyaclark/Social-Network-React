import React from 'react'
import {
	Button,
	Card,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	Item,
	Segment,
} from 'semantic-ui-react'
import Footer from '../footer/Footer'

function AboutPage() {
	return (
		<>
			<Segment vertical className='page'>
				<Grid container stackable verticalAlign='middle'>
					<Grid.Row>
						<Grid.Column width={16} textAlign='center'>
							<Header as='h1'>ViVii connects the world</Header>
							<p>
								Hi, I'm Krittiya. I'm a founder of ViVii. I created ViVii to
								help people share their hosting virtual experiences in real time
								with their friends and family right here at ViVii.
							</p>
							<Divider fitted />
							<p>
								ViVii is a virtual social networking event designed to help
								people find and build a global community of people who can
								create hosting virtual events, meet new virtual friends, learn
								new things, pursue passions, and hobbies to share with their friends, and grow their community.
							</p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign='center' style={{ padding: '8em 0em' }}>
							<Button size='massive' color='teal'>
								Join ViVii
							</Button>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={16} textAlign='center'>
							<Header as='h1' className='title'>Why are you hosting an event</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3} divided>
						<Grid.Column textAlign='center'>
							<Icon size='massive' name='briefcase' />
							<Header as='h2' content='Build your career' color='teal' />
							<p>Present your product, pitch to investors, or meet with a team</p>
						</Grid.Column>

						<Grid.Column textAlign='center'>
							<Icon size='massive' name='idea' />
							<Header as='h2' content='Be inspire' color='teal'/>
							<p>Create a class to tech the others, learn from the others, or get support</p>
						</Grid.Column>

						<Grid.Column textAlign='center'>
							<Icon size='massive' name='globe' />
							<Header as='h2' content='Network' color='teal' />
							<p>Make connections, meet new people, or connect with friends</p>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={8} textAlign='center'>
							<p>
								ViVii is free to join but if you find it helpful. Please
								consider shifting some money in to keep ViVii going. Thank you
								for all your support!
							</p>
							<Button size='massive' color='yellow'>
								 Patron
							</Button>
						</Grid.Column>

						<Grid.Column width={8} textAlign='center' style={{ padding: '8em 0em' }}>
							<Item.Content>
								<Image
									size='tiny'
									circular
									src='../../../assets/Krittiya_Clark.jpg'
									avatar
									verticalAlign='middle'
								/>{' '}
								<span>
									<b>Krittiya Clark</b>, Founder of ViVii
								</span>
							</Item.Content>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>

			<Footer />
		</>
	)
}

export default AboutPage
