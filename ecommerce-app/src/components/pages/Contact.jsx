import React, { useRef } from 'react';
import Header2 from '../UI/header2';

function Contact() {
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();

	async function submitHandler(event) {
		event.preventDefault();

		const userData = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
		};
		const response = await fetch(
			'https://ecomerce-ce245-default-rtdb.firebaseio.com/loginid.json',
			{
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		const data = await response.json();
		console.log(data);
		console.log(userData);
	}
	return (
		<>
			<Header2 />
			<form onSubmit={submitHandler}>
				<div>
					<div>
						<label
							htmlFor="name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">
							Full Name
						</label>
						<input
							type="text"
							id="name"
							ref={nameRef}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="John"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="phone"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
							Phone number
						</label>
						<input
							type="tel"
							id="phone"
							ref={phoneRef}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="123-45-678"
							required
						/>
					</div>
				</div>
				<div className="mb-6">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
						Email address
					</label>
					<input
						type="email"
						id="email"
						ref={emailRef}
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="john.doe@company.com"
						required
					/>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
						Submit
					</button>
				</div>
			</form>
		</>
	);
}

export default Contact;
