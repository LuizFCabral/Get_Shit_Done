import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import Profile from '../src/pages/Profile/Profile';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/profile" exact element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
