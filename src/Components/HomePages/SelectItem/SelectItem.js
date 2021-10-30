import React from 'react';
import { Link } from 'react-router-dom';

const SelectItem = ({ select }) => {
	const { _id, name, img, description } = select;

	// const handleSelectTour = () => {};
	return (
		<div className="col">
			<div className="card h-100">
				<img src={img} style={{ width: '100%', height: '200px' }} className="card-img-top" alt="tour spot" />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{description.slice(0, 100)}</p>

					<Link className="text-decoration-none" to={`/orderPlace/${_id}`}>
						<button>Go tour</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SelectItem;
