import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './TripPlan.css';

const TripPlan = () => {
	return (
		<div className="mx-4">
			<h1 className="text-center">Plan your Trip</h1>
			<Row>
				<Col lg={6} xs={12}>
					<img style={{ width: '80%' }} src="https://i.ibb.co/PTKvsmM/3369736.jpg" alt="" />
				</Col>
				<Col lg={6} xs={12} className="d-flex justify-content-center align-items-center">
					<div>
						<h3>plan your trip with us</h3>
						<p className="trip-body lh-3">
							We provide you the best services for pretty your travel.If you want to travel around
							bangladesh we will be the best choice according to your wishes. We are offering you some
							discound of ticket price. we provide extra services for our best tickets buyers. So, Buy
							tickets immidiately without dilay. Best wishes for you.There are many variations of passages
							of available but the majority have suffered alteration in some form, by injected hum
							randomised words which don't look even slightly.
						</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default TripPlan;
