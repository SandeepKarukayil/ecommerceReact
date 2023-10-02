import { Fragment } from 'react';
function Navbar() {
	return (
		<Fragment>
			<div className=" flex  fixed w-full top-0 bg-black  text-white     mx-auto justify-between px-10 border-solid border-b-orange-600 ">
				<ul className="flex   sticky  top-0 z-50 py-1 justify-evenly gap-14 mx-auto ">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Store</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 my-2 rounded">
					Cart
				</button>
				<span className=" fixed top-1  right-3   px-2 bg-red-500 rounded-full ">
					3
				</span>
			</div>
		</Fragment>
	);
}

export default Navbar;
