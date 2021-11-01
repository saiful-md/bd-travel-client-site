import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();
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
						Booked Tickets
					</Nav.Link>

					{user.email ? (
						<Nav.Link
							as={NavLink}
							className="text-decoration-none mx-2 text-black"
							activeStyle={{
								fontWeight: 'bold',
								color: 'tomato'
							}}
							to="/manageOrder"
						>
							Manage All Tickets
						</Nav.Link>
					) : (
						''
					)}
					{user.email ? (
						<Nav.Link
							as={NavLink}
							className="text-decoration-none mx-2 text-black"
							activeStyle={{
								fontWeight: 'bold',
								color: 'tomato'
							}}
							to="/add"
						>
							Add Tour Spot
						</Nav.Link>
					) : (
						''
					)}

					{user.email ? (
						<Navbar.Text>
							<h6 className="d-inline-block text-dark me-2">{user.displayName}</h6>
							<button onClick={logOut} className="btn btn-primary">
								Log out
							</button>
						</Navbar.Text>
					) : (
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
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
/* 
{user.displayName ? (
						<Navbar.Text>
							<a href="#login">{user.displayName}</a>
							<button onClick={logOut} className="btn btn-primary">
								Log out
							</button>
						</Navbar.Text>
					) : (
						''
					)}

*/
