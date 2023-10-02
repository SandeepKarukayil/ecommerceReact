import { Fragment } from 'react';
import Navbar from './Navbar';

const Header = () => {
	return (
		<Fragment>
			<Navbar className="border-solid" />
			<header className="bg-gray-600 my-12">
				<div className=" text-center border-s-violet-700 ">
					<h1 className="font-serif font-bold text-5xl text-center py-8 text-white">
						The Generics
					</h1>
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
