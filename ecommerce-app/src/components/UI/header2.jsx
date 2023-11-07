import { Fragment, useState, useContext } from 'react';

import CartContext from '../store/CartContext';
import Navbar2 from './Navbar2';

// import ModalCart from '../modal/ModalCart';

const Header2 = (props) => {
	// const [show, setShow] = useState(false);
	// const handleShow = () => setShow(true);
	// const handleClose = () => setShow(false);

	// const cartCtx = useContext(CartContext);

	// const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
	// 	return currNumber + item.quantity;
	// }, 0);

	return (
		<Fragment>
			<Navbar2
				className="border-solid"
				showCartButton={true}
			/>
			<header className="bg-gray-600 mt-12">
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

export default Header2;
