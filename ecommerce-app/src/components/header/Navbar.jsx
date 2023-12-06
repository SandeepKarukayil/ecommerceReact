import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ModalCart from '../modal/ModalCart';
function Navbar() {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<Fragment>
			<div className=" flex  fixed w-full top-0 bg-black  text-white     mx-auto justify-between px-10 border-solid border-b-orange-600 ">
				<ul className="flex   sticky  top-0 z-50 py-1 justify-evenly gap-14 mx-auto ">
					<li>
						<NavLink
							to="/home"
							exact
							activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/store"
							activeClassName="active">
							Store
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							activeClassName="active">
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							activeClassName="active">
							Contact
						</NavLink>
					</li>
				</ul>
				{setShow && (
					<ModalCart
						show={show}
						handleShow={handleShow}
						handleClose={handleClose}
					/>
				)}
				{/* <span className=" fixed top-1  right-3   px-2 bg-red-500 rounded-full "></span> */}
			</div>
		</Fragment>
	);
}

export default Navbar;
