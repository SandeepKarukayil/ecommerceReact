import { Fragment, React } from 'react';

function CartItems(props) {
	const price = props.price.toFixed(2);
	return (
		<Fragment>
			{/* <section className=" flex-wrap     inline-flex mx-36 justify-center my-4 text-center px-10 py-4 overflow-clip">
				<div>
					<h1 className="mb-4 font-bold">{props.title}</h1>
					<img
						className=" h-32 w-44  hover: ease-in-out hover:scale-110 transition duration-500 cursor-pointer object-cover  "
						src={props.image}
						alt={props.title}
					/>
					<h1>${price}</h1>
					<h1>Quantity :{props.quantity}</h1>
				</div>
			</section> */}
			<section>
				<div className="flex">
					<div className="column-3">
						<img
							src={props.image}
							width="80px"
							height="80px"
							className="mb-2 mt-2"
							alt={props.title}
						/>
					</div>
					<div className="column-3">
						<h4>Quantity : {props.quantity}</h4>
					</div>
					<div className="column-3">
						<u>Price</u>
						<p> {price}</p>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default CartItems;
