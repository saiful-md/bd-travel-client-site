import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Add = () => {
	const nameRef = useRef();
	const passRef = useRef();
	const handleForm = (e) => {
		const name = nameRef.current.value;
		const password = passRef.current.value;
		const user = { name, password };
		console.log(user);
		fetch('http://localhost:5000/user', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		}).then();

		// useEffect(() => {
		// 	fetch('http://localhost:5000/user');
		// }, []);
		e.preventDefault();
	};

	return (
		<div>
			<form onClick={handleForm}>
				<input type="text" ref={nameRef} name="" id="" placeholder="name" />
				<input type="password" ref={passRef} name="" id="" placeholder="pass" />
				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default Add;
