import { useState, useContext } from 'react';

import CartContext from '../store/CartContext';
import Cart from '../Cart/Cart';

export default function ModalCart(props) {
	const [showModal, setShowModal] = useState(false);

	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);
	console.log(numberOfCartItems);
	return (
		<>
			<button
				className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}>
				Cart
			</button>
			<span>{numberOfCartItems}</span>
			{console.log(typeof numberOfCartItems)};
			{showModal ? (
				<>
					<div className="justify-center items-center flex  overflow-x-hidden overflow-y-clip fixed inset-0 z-50 outline-none focus:outline-black text-black">
						<div className="relative w-max my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-black">
								{/*header*/}

								{/*body*/}
								<Cart />
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}>
										Save Changes
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
