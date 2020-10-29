import React from 'react'
import {
	Button,
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
							<Header as='h1'>ViiHost connects the world</Header>
							<p>
								Hi, I'm Krittiya. I'm a founder of ViiHost. I created ViiHost to
								help people share their hosting virtual event experiences in
								real time with their friends and family right here at ViiHost.
							</p>
							<Divider fitted />
							<p>
								ViiHost is a virtual social networking event designed to help
								people find and build a global community of people who can
								create hosting virtual events, meet new virtual friends, learn
								new things, pursue passions, and hobbies to share with their
								friends, and grow their network.
							</p>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign='center' style={{ padding: '8em 0em' }}>
							<Button size='massive' color='teal'>
								Join ViiHost
							</Button>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={16} textAlign='center'>
							<Header as='h1' className='title'>
								Why are you hosting a virtual event
							</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3} divided>
						<Grid.Column textAlign='center'>
							<Icon size='massive' name='briefcase' />
							<Header as='h2' content='Build your career' color='teal' />
							<p>
								Create a class to teach others, learn from the others, mentor
								others, or get support
							</p>
						</Grid.Column>

						<Grid.Column textAlign='center'>
							<Icon size='massive' name='idea' />
							<Header as='h2' content='Be inspire' color='teal' />
							<p>
								Create a class to tech the others, learn from the others,
								mentorer, or get support
							</p>
						</Grid.Column>

						<Grid.Column textAlign='center'>
							<Icon size='massive' name='globe' />
							<Header as='h2' content='Network' color='teal' />
							<p>
								Make connections, meet new people, network relationships, or
								connect with friends
							</p>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={8} textAlign='center'>
							<p>
								ViiHost is free to join but if you find it helpful. Please
								consider shifting some money in to keep ViiHost going. Thank you
								for all your support!
							</p>
							<Button size='massive' color='yellow'>
								Patron
							</Button>
						</Grid.Column>

						<Grid.Column
							width={8}
							textAlign='center'
							style={{ padding: '8em 0em' }}>
							<Item.Content>
								<Image
									size='tiny'
									circular
									src='../../../assets/Krittiya_Clark.jpg'
									avatar
									verticalAlign='middle'
								/>{' '}
								<span>
									<b>Krittiya Clark</b>, Founder of ViiHost
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
