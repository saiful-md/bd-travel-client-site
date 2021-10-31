import React from 'react';
import Banner from '../HomePages/Banner/Banner';
import Carosol from '../HomePages/Caraosol/Carosol';
import MainOffering from '../HomePages/MainOffering/MainOffering';
import TripPlan from '../HomePages/TripPlan/TripPlan';

const Home = () => {
	return (
		<div>
			<Carosol />
			<MainOffering />
			<TripPlan />
			<Banner />
		</div>
	);
};

export default Home;
