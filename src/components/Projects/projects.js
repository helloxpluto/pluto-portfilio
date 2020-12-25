import React from 'react';
import './projects.css';
import { Button, Row, Col, Container, Card } from 'react-bootstrap';

const projects = () => {
	return (
		<div class='project-container'>
			<Container>
				<Container>
					<Row>
						<Col>
							<div class='cards1'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>Little Space X</Card.Title>
										<Card.Text>
											A small game like hangman where the user guesses a word,
											every wrong guess removes one bar from mr.space-mans gas
											tank, once the tank is depleted the user loses the game.
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col>
							<div class='cards1'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>The Sorting Hat</Card.Title>
										<Card.Text>
											simple web app that gives you the ability to type in your name
                                            and let the sorting hat pick out a school house for you.
                                            the user then has the otion to restart or to enable a dropdown menu that
                                            gives you a little more information about your school house. 
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col>
							<div class='cards1'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>Git List</Card.Title>
										<Card.Text>
											Group project with both front-end and back-end where the
											user has the ability to add, edit, and delete ideas for
											gifts. They can then add them to their own wish list and
											see a summary of prices and the total dollar amount for
											their wishlist.
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col>
							<div class='cards'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>Smpler</Card.Title>
										<Card.Text>
											A vintage styled audio sampler made to test your sounds 
                                            together before uploading them to your audio equipment. 
                                            User can upload and download samples to the smpler server
                                            and share them with friends and other users.
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col>
							<div class='cards'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>White Elephant</Card.Title>
										<Card.Text>
											A multiplayer game that users can play form the vcomfort of their own home.
                                            taking the traditional white lelephant game and making an interactive version
                                            that friends and family can play together over zoom. this app has the ability and
                                            a great oportunity for a comerce app that can sell the users promoted items in specific
                                            price ranges. it would be the perfect target audience since they are all in the market 
                                            a simple fun gift that fits that price range. everyone pays for their gift and writes in
                                            a valid shipping address before the game starts. at the end of the game. a list of all the 
                                            gifts and their final owners are displayed and can then be dropp shipped to the corrrect player.  
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col>
							<div class='cards'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>Skull and Drones</Card.Title>
										<Card.Text>
											is a web site blog and community app where drone enthusiests can get together and share information on drones.
                                            personal fight videos and pictures as well as keep a flight log in their profile so other useers can see their level of experience. there will be a badge system depending on how long you have been a member. what kind of member you are and how much flight time you have behind the stcks.
                                            this app will also be a way for pilots to network and share jobs and resources with their fellow community members. members can link their page to their linked in or resume t show their flight info. flight log. experience videos. what kind of technology they are proficvient at. if they have passed several quizes or community events and a list of all the different crafts they have piloted.
										</Card.Text>
										<Button variant='primary'>Go somewhere</Button>
									</Card.Body>
								</Card>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
};

export default projects;
