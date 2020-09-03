import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddContact = () => {

	const [item, guardarItem] = useState({});

	//sacar datos
	const handleChange = e => {
		//actualizar state
		guardarItem({
			...item,
			[e.target.name]: e.target.value
		})
	};
	//registrar datos
	const handleSubmit = e => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5"> Add a new contact </h1>{" "}
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label> Full Name </label>{" "}
						<input type="text" name='name' className="form-control" placeholder="Full Name" onChange={handleChange} />{" "}
					</div>{" "}
					<div className="form-group">
						<label> Email </label>{" "}
						<input
							type="email"
							name='email'
							className="form-control"
							placeholder="Enter email"
							onChange={handleChange}
						/>{" "}
					</div>{" "}
					<div className="form-group">
						<label> Phone </label>{" "}
						<input
							type="phone"
							name='phone'
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChange}
						/>{" "}
					</div>{" "}
					<div className="form-group">
						<label> Address </label>{" "}
						<input
							type="text"
							name='address'
							className="form-control"
							placeholder="Enter address"
							onChange={handleChange}
						/>{" "}
					</div>{" "}
					<button type="submit" className="btn btn-primary form-control">
						save{" "}
					</button>{" "}
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts{" "}
					</Link>{" "}
				</form>{" "}
			</div>{" "}
		</div>
	);
};
