import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import CourseDetails from './views/CourseDetails';

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
						<Route path="/" element={<Home/>} />
						<Route path="/course_details" element={<CourseDetails/>}/>
					</Routes>
				</div>
				<footer></footer>
			</div>
		</Router>
	);
}

export default App;
