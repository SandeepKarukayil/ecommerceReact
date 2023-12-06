import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Music from './components/section/Music.jsx';
import Contact from './components/pages/Contact.jsx';

//we can define router we two methods

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 		Children: [
// 			{
// 				path: 'home',
// 				element: <Home />,
// 			},
// 			{
// 				path: 'about',
// 				element: <About />,
// 			},
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}>
			<Route
				path="home"
				element={<Home />}
			/>
			<Route
				path="about"
				element={<About />}
			/>
			<Route
				path="store"
				element={<Music />}
			/>
			<Route
				path="contact"
				element={<Contact />}
			/>
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
