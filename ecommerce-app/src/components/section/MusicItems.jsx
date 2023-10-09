import React, { useState } from 'react';

function MusicItems(props) {
	const [enteredAmount, setEnteredAmount] = useState(0);
	const price = props.price.toFixed(2);

	const amountHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		console.log(enteredAmount);
		console.log(props.title);
		console.log(price);
	};

	return (
		<React.Fragment>
			<section className="flex  mx-8 border  border-s-violet-500   my-4 text-center px-10 py-4 overflow-clip">
				<div>
					<h1 className="mb-4 font-bold">{props.title}</h1>
					<img
						className=" h-32 w-44  hover: ease-in-out hover:scale-110 transition duration-500 cursor-pointer object-cover  "
						src={props.image}
						alt={props.title}
					/>
					<h1>${price}</h1>

					<form onSubmit={submitHandler}>
						<input
							type="number"
							onChange={amountHandler}
						/>

						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 my-2 rounded">
							Add to cart
						</button>
					</form>
				</div>
			</section>
		</React.Fragment>
	);
}

export default MusicItems;
