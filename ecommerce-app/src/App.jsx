import Header from './components/header/Header';
import Music from './components/section/Music';
import Footer from './components/footer/Footer';
import CartProvider from './components/store/cartProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/pages/About';
const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<CartProvider>
				<Header />
				<Music />
				<Footer />
			</CartProvider>
		),
	},
	{ path: '/about', element: <About className=" overflow-hidden" /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
