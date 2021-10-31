import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="bg-primary p-4 text-white">
			<Container>
				<Row>
					<Col xs={12} md={12} lg={6}>
						<h3>BD TRAVEL</h3>
						<p>Saignboard, Board-Bazar, Gazipur sadar </p>
						<p>post code: Gazipur-1704</p>
					</Col>
					<Col>
						<div>
							<div>
								<p>Home</p>
								<p>Order Place</p>
								<p>Login</p>
								<p>Manage Order</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
