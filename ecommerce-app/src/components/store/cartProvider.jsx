import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};
console.log(defaultCartState.totalAmount);

const cartReducer = (state, action) => {
	console.log(state.totalAmount);
	console.log(action.item.price);
	console.log(action.item.amount);
	if (action.type === 'ADD') {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		console.log(updatedTotalAmount);
		const existingCartItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;
		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity + action.item.quantity,
			};
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, disPatchState] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandlet = (item) => {
		disPatchState({
			type: 'ADD',
			item: item,
		});
	};
	console.log(cartState.items);
	const removeItemFromCartHandler = (id) => {};
	const cartContext = {
		// items: cartState.items,
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		// totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandlet,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};
export default CartProvider;
