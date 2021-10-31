import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';

const Add = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		fetch('http://localhost:5000/allTickets', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}).then();
		console.log(data);
	};

	return (
		<div className="my-5">
			<h1 className="text-center">Add a tour sopt</h1>
			<form className="text-center" onSubmit={handleSubmit(onSubmit)}>
				<input className="w-50 my-4 p-1" {...register('name')} placeholder="name" />
				<br />
				<input className="w-50 p-1" {...register('img')} placeholder="image url" /> <br />
				<textarea className="w-50 mt-4 p-1" {...register('description')} placeholder="Description" /> <br />
				<input className="w-50 mt-4 p-2 bg-primary rounded-pill border-0 " type="submit" />
			</form>
		</div>
	);
};

export default Add;
