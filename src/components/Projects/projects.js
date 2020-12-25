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
						<Col sm={4}>
							<div class='cards'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>White Elephant</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
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
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
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
