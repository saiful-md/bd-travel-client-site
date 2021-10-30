import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderPlace = () => {
	const { id } = useParams();
	const [
		tour,
		setTour
	] = useState([]);

	useEffect(
		() => {
			fetch(`http://localhost:5000/user/${id}`).then((res) => res.json()).then((data) => setTour(data));
		},
		[
			id
		]
	);

	useEffect(() => {
		fetch('http://localhost:5000/user/newBooking', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(tour)
		}).then();
	}, []);

	return (
		<div>
			<h1>this is order place .{tour.name}</h1>
		</div>
	);
};

export default OrderPlace;
