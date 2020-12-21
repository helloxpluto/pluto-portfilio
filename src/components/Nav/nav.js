import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = () => {
	return (
		<div>
			<Navbar bg='light' variant='light'>
				<Navbar.Brand href='/'>Angel Rene Meillon </Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#features'>Features</Nav.Link>
					<Nav.Link href='#pricing'>Pricing</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default nav;
