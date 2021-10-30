import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
			<Container>
				<h1>BD TRAVEL</h1>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav.Link
						as={NavLink}
						className="text-decoration-none mx-2 text-black"
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						to="/home"
					>
						Home
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						className="text-decoration-none mx-2 text-black"
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						to="/orderPlace"
					>
						Order Place
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						className="text-decoration-none mx-2 text-black"
						activeStyle={{
							fontWeight: 'bold',
							color: 'cyan'
						}}
						to="/Login"
					>
						Login
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						className="text-decoration-none mx-2 text-black"
						activeStyle={{
							fontWeight: 'bold',
							color: 'tomato'
						}}
						to="/manageOrder"
					>
						Manage Order
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
