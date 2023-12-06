//

import React from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

// uses layout as base and we can change things in outlet
function Layout() {
	return (
		<>
			<Outlet />
		</>
	);
}

export default Layout;
