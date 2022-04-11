import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import CourseDetails from './views/CourseDetails';
import Course from './views/Course';

function App() {
	// You can put javascript code here or declare constants!
	// use {} inside html to access variables

	//const onClick = () => {
	//	console.log('Click');
	//}

	return (
		<Router>
			<div className='App'>
				<div className='content'>
					<Routes>
						<Route path="/zklands" element={<Home />} />
						<Route path="/applied_cryptography/details" element={<CourseDetails />} />
						<Route path="/applied_cryptography" element={<Course />} />
						<Route path="/modular_arithmetic/details" element={<CourseDetails />} />
						<Route path="/modular_arithmetic" element={<Course />} />
						<Route path="/discrete_maths/details" element={<CourseDetails />} />
						<Route path="/discrete_maths" element={<Course />} />
						<Route path="/number_theory/details" element={<CourseDetails />} />
						<Route path="/number_theory" element={<Course />} />
					</Routes>
				</div>
				<footer></footer>
			</div>
		</Router>
	);
}

export default App;
