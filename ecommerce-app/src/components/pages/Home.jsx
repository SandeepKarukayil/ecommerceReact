import React from 'react';
import Header2 from '../UI/header2';
import ReactLogo from '../../assets/play-button-svgrepo-com.svg';
import Footer from '../footer/Footer';

function Home() {
	return (
		<React.Fragment>
			<Header2 />
			<div className="bg-gray-600 py-4 text-center justify-center  ">
				<button className="border border-blue-400 mx-80 w-56 mb-12 text-white">
					Get our latest Album
				</button>
				<img
					src={ReactLogo}
					alt="play-button"
					className="w-20   mx-auto cursor-pointer block "
				/>
			</div>
			<section className="ml-auto mr-auto max-w-4xl border border-none">
				<h3 className="font-MetalMania m-4 text-center text-xl">
					Tours
				</h3>

				<div className="flex gap-2 border border-b border-black p-2">
					<span>JUL 16</span>
					<span className="text-gray-700">DETROIT, MI</span>
					<span className="text-gray-700">
						DTE ENERGY MUSIC THEATRE
					</span>
					<button className="bg-blue-500 text-white p-2 rounded-md font-bold  ml-auto">
						BUY TICKETS
					</button>
				</div>

				<div className="flex gap-2 border border-b border-black p-2">
					<span>JUL 19</span>
					<span className="text-gray-700">TORONTO,ON</span>
					<span
						className="
						text-gray-700">
						BUDWEISER STAGE
					</span>
					<button className="bg-blue-500 text-white p-2 rounded-md font-bold  ml-auto">
						BUY TICKETS
					</button>
				</div>

				<div className="flex gap-2 border border-b border-black p-2">
					<span>JUL 22</span>
					<span className="text-gray-700">BRISTOW, VA</span>
					<span
						className="
						text-gray-700">
						JIGGY LUBE LIVE
					</span>
					<button className="bg-blue-500 text-white p-2 rounded-md font-bold  ml-auto">
						BUY TICKETS
					</button>
				</div>

				<div className="flex gap-2 border border-b border-black p-2">
					<span>JUL 29</span>
					<span className="text-gray-700">PHOENIX, AZ</span>
					<span
						className="
						text-gray-700">
						AK-CHIN PAVILION
					</span>
					<button className="bg-blue-500 text-white p-2 rounded-md font-bold  ml-auto">
						BUY TICKETS
					</button>
				</div>

				<div className="flex gap-2 border border-b border-black p-2">
					<span>AUG 2</span>
					<span className="text-gray-700">LAS VEGAS, NV</span>
					<span
						className="
						text-gray-700">
						T-MOBILE ARENA
					</span>
					<button className="bg-blue-500 text-white p-2 rounded-md font-bold  ml-auto">
						BUY TICKETS
					</button>
				</div>

				<div className="flex gap-2 border border-b border-black p-2 space-justify-content-between">
					<span>AUG 7</span>
					<span className="text-gray-700">CONCORD, CA</span>
					<span
						className="
						text-gray-700">
						CONCORD PAVILION
					</span>
					<button className="bg-blue-500 text-white p-2 rounded-md font-bold ml-auto">
						BUY TICKETS
					</button>
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
