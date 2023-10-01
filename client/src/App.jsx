import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import ItemApartment from './components/ProductItem/ItemApartment';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Home searchValue={searchValue} setSearchValue={setSearchValue} />
			),
		},
		{
			path: '*',
			element: <NotFound />,
		},
		{
			path: '/apartments/:id',
			element: <ItemApartment />,
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
