import Header from './components/header/Header';
import Music from './components/section/Music';
import Footer from './components/footer/Footer';
import CartProvider from './components/store/cartProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: (
// 			<CartProvider>
// 				<Header />
// 				<Music />
// 				<Footer />
// 			</CartProvider>
// 		),
// 	},
// 	{
// 		path: '/store',
// 		element: (
// 			<CartProvider>
// 				<Header />
// 				<Music />
// 				<Footer />
// 			</CartProvider>
// 		),
// 	},
// 	{ path: '/about', element: <About className=" overflow-hidden" /> },
// 	{ path: '/home', element: <Home className=" overflow-hidden" /> },
// ]);

function App() {
	return <></>;
}

export default App;
