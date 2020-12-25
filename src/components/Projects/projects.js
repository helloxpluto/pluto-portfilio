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
										<Card.Title>Card Title</Card.Title>
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
							<div class='cards1'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
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
							<div class='cards1'>
								<Card class='cards' style={{ width: '18rem' }}>
									<Card.Img variant='top' src='holder.js/100px180' />
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
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
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
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
										<Card.Title>Card Title</Card.Title>
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
										<Card.Title>Card Title</Card.Title>
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
