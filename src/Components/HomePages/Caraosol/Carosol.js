import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carosol.css';

const Carosol = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block carosol-image"
						src="https://i.ibb.co/bQqpFSq/Optimized-9114200-sylhet-1.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Sreemangal</h3>
						<p>
							Sreemangal is an upazila of Moulvibazar District in the Sylhet Division of Bangladesh.t is
							said the name Sreemangal is named after Sri Das and Mangal Das
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block carosol-image"
						src="https://i.ibb.co/PFVWHZc/download-1.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Sitakunda Upazila</h3>
						<p>
							Sitakunda is an upazila, or administrative unit, in the Chittagong District of Bangladesh.
							It includes one urban settlement, the Sitakunda Town, and 10 unions, the lowest of
							administrative units in Bangladesh
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block carosol-image"
						src="https://i.ibb.co/MBZWtmS/download.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption className="">
						<h3>Kuakata</h3>
						<p>
							Kuakata is a town in southern Bangladesh known for its panoramic sea beach.Kuakata beach is
							a sandy expanse 18 kilometres long and 3 kilometreswide. From the beach one can have an
							unobstructed view of both{' '}
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Carosol;
