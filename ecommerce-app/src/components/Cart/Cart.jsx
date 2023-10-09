import React, { Fragment } from 'react';
import CartItems from './CartItems';

const cartElements = [
	{
		id: '0',
		title: 'Colors',

		price: 100,

		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

		quantity: 2,
	},

	{
		id: '1',
		title: 'Black and white Colors',

		price: 50,

		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

		quantity: 3,
	},

	{
		id: '2',
		title: 'Yellow and Black Colors',

		price: 70,

		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

		quantity: 1,
	},
];

function Cart() {
	return (
		<Fragment>
			<ul>
				{cartElements.map((item) => {
					console.log(`Title: ${item.title}, Price: ${item.price}`);
					return (
						<CartItems
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.imageUrl}
							price={item.price}
							quantity={item.quantity}
						/>
					);
				})}
			</ul>

			{/* <div>
				<h3> Cart </h3>
				<div>
					<u>item</u>
				</div>
				<div>
					<u>Price</u>
				</div>
				<div>
					<u>Quantity</u>
				</div>
			</div> */}
		</Fragment>
	);
}

export default Cart;
