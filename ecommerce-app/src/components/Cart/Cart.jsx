import { Fragment, React, useContext } from 'react';
import CartContext from '../store/CartContext';

function Cart(props) {
	const cartCtx = useContext(CartContext);
	const totalAmount = +`${cartCtx.totalAmount.toFixed(2)}`;
	console.log(totalAmount);
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, quantity: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const purchaseHandler = () => {
		alert(`Congratulations You have bought the purchase  `);
	};

	return (
		<Fragment>
			{cartCtx.items.map((item) => {
				return (
					<section>
						<div
							className="flex"
							key={item.id}>
							<u>ITEM</u>
							<div className="column-3">
								<img
									src={item.image}
									width="80px"
									height="80px"
									className="mb-2 mt-2"
									alt={item.title}
								/>
								{item.title}
							</div>

							<div className="column-3">
								<p>Quantity : {item.amount}</p>
							</div>
							<br />
							<div className="column-3">
								<u>Price</u>
								<p> ${item.price}</p>
							</div>
						</div>
					</section>
				);
			})}

			<div className=" justify-content-start">
				<div className=" ">
					<span className="total">
						<b>Total:</b>
					</span>
					<span>${totalAmount}</span>
				</div>
			</div>
			<div className=" justify-content-center">
				<div className=" me-5">
					<button
						className="bg-blue-500"
						onClick={purchaseHandler}>
						PURCHASE
					</button>
				</div>
			</div>
		</Fragment>
	);
}

export default Cart;
