import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ApartmentList from './components/ApartmentList';
import AppRouter from './components/AppRouter';

function App() {
	const [apartments, setApartments] = useState([]);

	const getApartments = async () => {
		try {
			const response = await fetch('http://localhost:3000/api/apartments');
			const jsonData = await response.json();
			setApartments(jsonData);
		} catch (err) {
			console.error(err.message);
		}
	};
	useEffect(() => {
		getApartments();
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<AppRouter />
				<Header />
				<ApartmentList apartments={apartments} />
			</BrowserRouter>
		</div>
	);
}

export default App;
