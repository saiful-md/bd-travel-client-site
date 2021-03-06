import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';

const Booking = () => {
	const { id } = useParams();
	const { user } = useAuth();

	const [
		bookedSpot,
		setBookedSpot
	] = useState([]);
	useEffect(
		() => {
			fetch(`https://damp-dusk-75961.herokuapp.com/allTickets/${id}`)
				.then((res) => res.json())
				.then((data) => setBookedSpot(data));
		},
		[
			id
		]
	);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		fetch('https://damp-dusk-75961.herokuapp.com/spacificUser', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					alert('Booked successfully!');
				}
			});
		reset();
	};
	return (
		<div className="mx-5">
			<h1 className="text-center mb-4">Booked travel ticked</h1>
			<h5 className="text-center text-success">Tittle: {bookedSpot.name}</h5>
			<Container>
				<Row className="">
					<Col xs={12} lg={4}>
						<Card>
							<Card.Img variant="top" src={bookedSpot.img} />
							<Card.Body>
								<Card.Title>{bookedSpot.name}</Card.Title>
								<Card.Text>{bookedSpot.description}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} lg={8}>
						<form className="text-center" onSubmit={handleSubmit(onSubmit)}>
							<input
								className="w-50 my-4 p-1"
								{...register('userName', { required: true, maxLength: 20 })}
								placeholder="User name"
							/>
							<br />
							<input className="w-50 p-1" {...register('email')} value={user.email} /> <br />
							<input className="w-50 mt-4 p-1" {...register('titleName')} placeholder="Title Name" />{' '}
							<br />
							<input className="w-50 mt-4 p-1" {...register('address')} placeholder="Address" /> <br />
							<input
								className="w-50 my-4 p-2"
								{...register('description')}
								placeholder="Description"
							/>{' '}
							<br />
							<input
								className="w-50 p-1"
								type="tel"
								{...register('PhoneNumber')}
								placeholder="Phone Number"
							/>{' '}
							<br />
							<input className="w-50 mt-4 p-2 bg-primary rounded-pill border-0 " type="submit" />
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Booking;
