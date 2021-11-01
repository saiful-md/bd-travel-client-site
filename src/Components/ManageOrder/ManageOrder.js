import React, { useEffect, useState } from 'react';
import { Table, ToggleButtonGroup } from 'react-bootstrap';

const ManageOrder = () => {
	const [
		manageOrder,
		setManageOrder
	] = useState([]);
	useEffect(() => {
		fetch('https://damp-dusk-75961.herokuapp.com/spacificUSer').then((res) => res.json()).then((data) => {
			console.log(data);
			setManageOrder(data);
		});
	}, []);

	const handleDelete = (id) => {
		// console.log(id);
		const deleteCoirmation = window.confirm('Are you sure to delete the ticket');
		if (deleteCoirmation) {
			fetch(`https://damp-dusk-75961.herokuapp.com/spacificUSer/${id}`, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((data) => {
					alert('Deleted Successfully');
					const remainingSpacificUser = manageOrder.filter((remaining) => remaining._id !== id);
					setManageOrder(remainingSpacificUser);
				});
		}
	};

	return (
		<div className="m-5">
			<h1>Manage all Booking Ticket user</h1>
			{manageOrder.length === 0 ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>UserName</th>
							<th>Email</th>
							<th>Booking Title</th>
							<th>Booking Delete</th>
						</tr>
					</thead>

					<tbody>
						{manageOrder.map((user) => (
							<tr>
								<td>{user.userName}</td>
								<td>{user.email}</td>
								<td>{user.titleName}</td>
								<td className="d-flex justify-content-between flex-column">
									<button onClick={() => handleDelete(user._id)} className="btn btn-danger mb-3">
										DELETE
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
};

export default ManageOrder;
