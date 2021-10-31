import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';

import './Login.css';

const Login = () => {
	const { googleSingIn, setUser, setIsLoading } = useAuth();
	let location = useLocation();
	let history = useHistory();
	const url = location.state?.from || '/home';
	console.log(history, url)

	const handleGoogleSignIn = () =>{
		googleSingIn()
		.then((result) => {
			console.log(result)
			setUser(result.user);
			history.push(url)

		})
		.catch((error) => console.log(error.message))
	};
		
	
	return (
		<Row className="border w-50 border-success mx-auto p-3 my-5 login-container">
			<Col lg={6} xs={12}>
				<h3>
					login With <span className="text-danger">G</span>oogle
				</h3>
				<div className="mt-5">
					<button onClick={handleGoogleSignIn} className="border-0 px-5 py-2 rounded-pill">
						<i className="fab fa-google text-primary" />
					</button>
				</div>
			</Col>
		</Row>
	);
};

export default Login;
