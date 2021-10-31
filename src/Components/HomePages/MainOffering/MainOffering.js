import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SelectItem from '../SelectItem/SelectItem';

const MainOffering = () => {
	const [
		tours,
		setTours
	] = useState([]);
	useEffect(() => {
		fetch('https://damp-dusk-75961.herokuapp.com/allTickets')
			.then((res) => res.json())
			.then((data) => setTours(data));
	}, []);
	return (
		<div className="mb-5">
			<h1 className="text-center mt-5">
				Offering ticket for <span className="text-success fst-italic"> BOOKING</span>
			</h1>
			{tours.length === 0 ? (
				<div class="d-flex justify-content-center">
					<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="row row-cols-1 row-cols-md-3 g-4 my-2 mx-5">
					{tours.map((selectItem) => <SelectItem select={selectItem} />)}
				</div>
			)}
		</div>
	);
};

export default MainOffering;
