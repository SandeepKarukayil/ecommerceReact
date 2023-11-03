import React, { useContext, useRef } from 'react';
import CartContext from '../store/CartContext';
import MusicItems from './MusicItems';

function ProductToCart(props) {
	const cartCtx = useContext(CartContext);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		// ref current.value is always as string even if we declare as number .
		const enteredAmount = amountInputRef.current.value;
		// to convert string to number
		const enteredAmountNumber = +enteredAmount;
		props.onAddToCart(enteredAmountNumber);
		console.log(enteredAmountNumber);
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				{/* <input type="number" /> */}
				<label htmlFor={`amount_ + ${props.id}`}>Quantity </label>
				<input
					ref={amountInputRef}
					id={`amount_ + ${props.id}`}
					type="number"
					min="1"
					max="10"
					step="1"
					defaultValue="1"
					style={{ width: '4rem', height: '2rem' }}
				/>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 my-2 rounded"
					type="submit">
					Add to cart
				</button>
			</form>
		</div>
	);
}

export default ProductToCart;
