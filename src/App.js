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
import NotFound from './Components/NotFound/NotFound';

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
						<PrivateRoute exact path="/orderPlace">
							<OrderPlace />
						</PrivateRoute>
						<Route exact path="/login">
							<Login />
						</Route>
						<PrivateRoute exact path="/add">
							<Add />
						</PrivateRoute>
						<PrivateRoute exact path="/manageOrder">
							<ManageOrder />
						</PrivateRoute>
						<Route exact pat="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
