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
		fetch('http://localhost:5000/user').then((res) => res.json()).then((data) => setTours(data));
	}, []);
	return (
		<div>
			<h1 className="text-center mt-5">this is main offering {tours.length} </h1>
			<div className="row row-cols-1 row-cols-md-3 g-4 my-2 mx-5">
				{tours.map((selectItem) => <SelectItem select={selectItem} />)}
			</div>
		</div>
	);
};

export default MainOffering;
