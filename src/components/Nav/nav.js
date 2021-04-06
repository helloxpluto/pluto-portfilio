import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css'

const nav = () => {
	return (
		<div>
			<Navbar bg='light' variant='light'>
				<Navbar.Brand  href='/'><h3 class='name' > Angel Rene Meillon </h3>  </Navbar.Brand>
				<Nav className='mr-auto'>
					<Link to='/' class='nav-link' > Home </Link>
					<Link to='/' class='nav-link' > Resume </Link>
					<Link to='/' class='nav-link' > Contact Me </Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default nav;
