import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = () => {
	return (
		<div>
			<Navbar bg='light' variant='light'>
				<Navbar.Brand href='/'>Angel Rene Meillon </Navbar.Brand>
				<Nav className='mr-auto'>
					<Link to='/' class='nav-link' > home </Link>
					<Link to='/' class='nav-link' > resume </Link>
					<Link to='/' class='nav-link' > contact me </Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default nav;
