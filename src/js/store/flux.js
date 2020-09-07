const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			full_name: null,
			email: null,
			agenda_slug: "padawan_agenda",
			address: null,
			phone: null
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			// Read
			getContacts: async () => {
				const store = getStore();
				const data = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/padawan_agenda");
				const response = await data.json();
				setStore((store.contacts = response));
			},
			// Create
			postContact1: () => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.
				const store = getStore();
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: "attilio",
						email: "attiliogiglio@gmail.com",
						agenda_slug: "padawan_agenda",
						address: "las trinitarias 7023, 610",
						phone: "95416520"
					})
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }));
			},
			postContact2: () => {
				//To access to data from the store(obj), use getstore. You will use frequently to change the data stored.
				const store = getStore();
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: store.full_name,
						email: store.email,
						agenda_slug: store.agenda_slug,
						address: store.address,
						phone: store.phone
					})
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => data);
			},
			handleChange: e => {
				const store = getStore();
				setStore({
					[e.target.name]: e.target.value
				});
				console.log(store.phone, store.full_name, store.address, store.email);
			},
			handleClickSubmit: e => {
				e.preventDefault();
				getActions().postContact2();
			},
			// Update
			putContact: id => {
				const store = getStore();
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: store.full_name,
						email: store.email,
						agenda_slug: store.agenda_slug,
						address: store.address,
						phone: store.phone
					})
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.json())
					.then(data => setStore(data));
			},
			handleClickUpdate: (e, id) => {
				e.preventDefault();
				getActions().putContact(id);
				console.log(id);
			},
			// Delete
			deleteContact: id => {
				const store = getStore();
				const requestOptions = {
					method: "DELETE",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: store.full_name,
						email: store.email,
						agenda_slug: store.agenda_slug,
						address: store.address,
						phone: store.phone
					})
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, requestOptions)
					.then(response => response.json())
					.then(data => getActions().getContacts());
			},

			handleSetContact: contact => {
				setStore({ contact: contact });
			},

			handleDelete: (e, id) => {
				e.preventDefault();
				getActions().deleteContact(id);
				console.log(e);
			}
		}
	};
};

export default getState;
