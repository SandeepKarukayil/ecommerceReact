import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	BrowserRouter,
	Routes,
} from 'react-router-dom';

import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Music from './components/section/Music.jsx';
import CartProvider from './components/store/cartProvider';
import ProductDisplay from './components/pages/ProductsDisplay.jsx';
import StorePage from './components/pages/StorePage.jsx';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/store/:id"
						element={<ProductDisplay />}
					/>
					<Route
						path="/store"
						element={<StorePage />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	);
}
export default App;
