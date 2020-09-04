import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [newContact, setNewContact] = useState();

	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5"> Add a new contact </h1>{" "}
				<form onSubmit={e => actions.handleSubmit(e)}>
					<div className="form-group">
						<label> Full Name </label>{" "}
						<input
							type="text"
							name="fullName"
							value={store.fullname}
							className="form-control"
							placeholder="Full Name"
							onChange={e => actions.handleChange(e)}
						/>{" "}
					</div>{" "}
					<div className="form-group">
						<label> Email </label>{" "}
						<input
							type="email"
							name="email"
							value={store.email}
							className="form-control"
							placeholder="Enter email"
							onChange={e => actions.handleChange(e)}
						/>{" "}
					</div>{" "}
					<div className="form-group">
						<label> Phone </label>{" "}
						<input
							type="phone"
							name="phone"
							value={store.phone}
							className="form-control"
							placeholder="Enter phone"
							onChange={e => actions.handleChange(e)}
						/>{" "}
					</div>{" "}
					<div className="form-group">
						<label> Address </label>{" "}
						<input
							type="text"
							name="address"
							value={store.address}
							className="form-control"
							placeholder="Enter address"
							onChange={e => actions.handleChange()}
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
