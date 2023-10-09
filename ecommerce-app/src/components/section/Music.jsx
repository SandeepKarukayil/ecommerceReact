import React from 'react';
import MusicItems from './MusicItems';

const productsArr = [
	{
		id: 'p1',
		title: 'Red and Blue Colors',
		price: 100,
		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
	},
	{
		id: 'p2',
		title: 'Black and white Colors',
		price: 50,
		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
	},
	{
		id: 'p3',
		title: 'Yellow and Black Colors',
		price: 70,
		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
	},
	{
		id: 'p4',
		title: 'Blue Color',
		price: 100,
		imageUrl:
			'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
	},
];

function music() {
	return (
		<React.Fragment>
			<h3 className="text-center my-2 body-font font-MetalMania text-4xl">
				Colors
			</h3>

			<div className="flex flex-wrap justify-center ">
				{productsArr.map((item) => {
					return (
						<MusicItems
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.imageUrl}
							price={item.price}
						/>
					);
				})}
			</div>
			<div>
				<button className="bg-gray-400 text-blue-900 rounded-xl px-4 relative bottom-5 left-96">
					See the Cart
				</button>
			</div>
		</React.Fragment>
	);
}

export default music;
