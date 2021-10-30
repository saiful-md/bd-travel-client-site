import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import Login from './Components/Login/Login';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Header from './Components/Header/Header';
import Add from './Components/Form/Add';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<PrivateRoute exact path="/booking/:id">
							<Booking />
						</PrivateRoute>
						<Route exact path="/orderPlace">
							<OrderPlace />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/add">
							<Add />
						</Route>
						<Route exact path="/manageOrder">
							<ManageOrder />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
