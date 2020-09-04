// se tiene que modificar
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});

	const { store, actions } = useContext(Context);

	// const [contact, setContact] = useState([])

	// useEffect()

	// La lista se hace aca, el map..

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.length > 0 &&
							store.contacts.map((item, index) => {
								return (
									<ContactCard
										key={index}
										onDelete={() => setState({ showModal: true })}
										contact={item}
									/>
								);
							})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
