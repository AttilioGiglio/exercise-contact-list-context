import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const { store, actions } = useContext(Context);

	const { params } = props.match;

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5"> Add a new contact </h1>{" "}
				<form>
					<div className="form-group">
						<label> Full Name </label>{" "}
						<input
							type="text"
							name="full_name"
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
							onChange={e => actions.handleChange(e)}
						/>{" "}
					</div>{" "}
					<button
						type="submit"
						className="btn btn-primary form-control mb-3"
						onClick={e => actions.handleClickSubmit(e)}>
						submit{" "}
					</button>{" "}
					<button
						type="submit"
						className="btn btn-primary form-control mb-3"
						onClick={e => actions.handleClickUpdate(e, params.id)}>
						update{" "}
					</button>{" "}
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts{" "}
					</Link>{" "}
				</form>{" "}
			</div>{" "}
		</div>
	);
};

AddContact.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.number.isRequired
		})
	}),
	params: PropTypes.any
};
