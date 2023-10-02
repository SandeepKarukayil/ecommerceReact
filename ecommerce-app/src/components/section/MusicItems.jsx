import React from 'react';

function MusicItems(props) {
	const price = props.price.toFixed(2);
	return (
		<React.Fragment>
			<section className=" flex-wrap     inline-flex mx-36 justify-center my-4 text-center px-10 py-4 overflow-clip">
				<div>
					<h1 className="mb-4">{props.title}</h1>
					<img
						className=" h-32 w-44  hover: ease-in-out hover:scale-110 transition duration-500 cursor-pointer object-cover  "
						src={props.image}
						alt={props.title}
					/>
					<h1>${price}</h1>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 my-2 rounded">
						Add to cart
					</button>
				</div>
			</section>
		</React.Fragment>
	);
}

export default MusicItems;
