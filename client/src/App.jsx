import './App.css';
// import AppRouter from './components/AppRouter';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { useState } from 'react';

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
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
