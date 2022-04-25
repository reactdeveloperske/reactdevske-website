import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import MembersPage from './Pages/MembersPage/MembersPage';
import EventPage from './Pages/EventsPage/EventPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' exact element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/members' element={<MembersPage />} />
					<Route path='/events' element={<EventPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
