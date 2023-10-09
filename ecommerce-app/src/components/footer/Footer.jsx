import React from 'react';

function Footer() {
	return (
		<footer className="bg-blue-400  flex justify-evenly">
			<div>
				<h2 className="text-white font-extrabold text-2xl">
					The Generics{' '}
				</h2>
			</div>
			<div className="flex justify-between gap-4">
				<img
					className="w-8"
					src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
					alt="youtube-logo"
				/>
				<img
					className="w-8"
					src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png"
					alt="spotify-logo"
				/>
				<img
					className="w-8"
					src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png"
					alt="facebook-logo"
				/>
			</div>
		</footer>
	);
}

export default Footer;
