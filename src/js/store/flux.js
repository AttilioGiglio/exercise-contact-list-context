// se tiene que modificar

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			newContact: {}
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
				const { contacts } = store;
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacts[contact])
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => (store.contacts = data));
			},
			handleChange: e => {
				const store = getStore();
				const { newContact } = store;

				setStore({
					[e.target.name]: e.target.value
				});
			},
			handleSubmit: e => {
				e.preventDefault();
				getActions().postContact2();
			},
			// Update
			putContact: id => {
				const store = getStore();
				const { contacts } = store;
				const requestOptions = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contacts)
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, requestOptions)
					.then(response => response.json())
					.then(data => (store.contacts = data));
			},
			// Delete
			deleteContact: () => {
				const store = getStore();
				const requestOptions = {
					method: "DELETE"
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(data => (store.contacts = data));
			}
		}
	};
};

export default getState;
