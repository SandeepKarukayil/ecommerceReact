import Header from './components/header/Header';
import Music from './components/section/Music';
import Footer from './components/footer/Footer';
import CartProvider from './components/store/cartProvider';

{
	/* The following line can be included in your src/index.js or App.js file */
}

function App() {
	return (
		<CartProvider>
			<Header />
			<Music />
			<Footer />
		</CartProvider>
	);
}

export default App;
