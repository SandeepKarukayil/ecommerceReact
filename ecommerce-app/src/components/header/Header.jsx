import { Fragment, useState } from 'react';
import Navbar from './Navbar';
import ModalCart from '../modal/ModalCart';

const Header = () => {
	// const [show, setShow] = useState(false);
	// const handleShow = () => setShow(true);
	// const handleClose = () => setShow(false);

	return (
		<Fragment>
			<Navbar className="border-solid" />
			<header className="bg-gray-600 my-12">
				<div className=" text-center border-s-violet-700 ">
					<h1 className="font-serif font-bold text-5xl text-center py-8 text-white">
						The Generics
					</h1>
				</div>
				{/* {setShow && (
					<ModalCart
						show={show}
						handleShow={handleShow}
						handleClose={handleClose}
					/>
				)} */}
			</header>
		</Fragment>
	);
};

export default Header;
