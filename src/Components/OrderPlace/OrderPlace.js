import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';
import './OrderPlace.css'

const OrderPlace = () => {
	const { user } = useAuth();
	// console.log(user);
	const [
		spacificUser,
		setSpacificUser
	] = useState();
	useEffect(
		() => {
			fetch('https://damp-dusk-75961.herokuapp.com/spacificUSer').then((res) => res.json()).then((data) => {
				const result = data.filter((userTicket) => userTicket.email === user.email);
				setSpacificUser(result);
				console.log(result);
			});
		},
		[
			user.email
		]
	);
		const handleDelete = (id) =>{
			console.log(id);
			fetch(`https://damp-dusk-75961.herokuapp.com/spacificUSer/${id}`, {
				method:"DELETE",
			}).then(res => res.json()).then(data => {
				const deleteConfirmation = window.confirm('Are you sure to delete your ticket')
				if(data.deletedCount > 0){
					alert("Deleted Successfully");
					const remainingSpacificUser = spacificUser.filter(remaining => remaining._id !== id);
					setSpacificUser(remainingSpacificUser)
				}
			})
		}
	return (
		<div className="text-center my-5 mx-3">
			<h1>this is order place. </h1>
			<h4>You Booked {spacificUser?.length} Ticket </h4>
			<Row className="mt-4 mx-3 text-start ">
				{spacificUser?.map((bookingInfo) => (
					
						<Col xs={12} lg={3} className="border p-3 mx-2 booking-single-ticket">
							<div>
								<h5 className="text-start">Booked {bookingInfo?.titleName} Ticket</h5>
								<p>Your email : {bookingInfo?.email}</p>
								<address>Address: {bookingInfo?.address}</address>
								<p>{bookingInfo?.description}</p>
								<p>Phone number: {bookingInfo?.PhoneNumber}</p>
								<button onClick={()=>handleDelete(bookingInfo?._id)}  className="btn btn-danger">Delete</button>
							</div>
							
						</Col>
					
				))}
			</Row>
		</div>
	);
};

export default OrderPlace;
