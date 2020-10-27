import React from 'react'

import { Container, Grid, Segment } from 'semantic-ui-react'

function Footer() {
	return (
		<Segment vertical className='footer'>
			<Container>
				<Grid inverted stackable>
					<Grid.Row>
						<Grid.Column width={16} textAlign='center'>
							<p>
								Copyright &copy;{' '}
								<script>document.write(new Date().getFullYear())</script>- ViVii
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	)
}

export default Footer
