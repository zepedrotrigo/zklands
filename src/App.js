import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
	// You can put javascript code here or declare constants!
	// use {} inside html to access variables

	//const onClick = () => {
	//	console.log('Click');
	//}

	return (
		<Router>
			<>
				<Home></Home>
			</>
		</Router>
	);
}

export default App;
