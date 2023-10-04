import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ItemApartment from './components/ProductItem/ItemApartment';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
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
