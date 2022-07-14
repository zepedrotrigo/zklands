import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import DigitalSignatures from './views/section1/applied_cryptography/DigitalSignatures';
import PublicKeyEncryption from './views/section1/applied_cryptography/PublicKeyEncryption';
import MerkleTrees from './views/section1/applied_cryptography/MerkleTrees';
import PolynomialCommitmentSchemes from './views/section1/applied_cryptography/PolynomialCommitmentSchemes';
import EllipticCurveCryptography from './views/section1/applied_cryptography/EllipticCurveCryptography';
import EllipticCurvePairings from './views/section1/applied_cryptography/EllipticCurvePairings';

function App() {
	// You can put javascript code here or declare constants!
	// use {} inside html to access variables

	return (
		<Router>
			<div className='App'>
				<div className='content'>
					<Routes>
						<Route path="/zklands" element={<Home />} />
						{/* section 1 */}
						<Route path="/applied_cryptography/digital_signatures" element={<DigitalSignatures />} />
						<Route path="/applied_cryptography/public_key_encryption" element={<PublicKeyEncryption />} />
						<Route path="/applied_cryptography/merkle_trees" element={<MerkleTrees />} />
						<Route path="/applied_cryptography/polynomial_commitment_schemes" element={<PolynomialCommitmentSchemes />} />
						<Route path="/applied_cryptography/elliptic_curve_cryptography" element={<EllipticCurveCryptography />} />
						<Route path="/applied_cryptography/elliptic_curve_pairings" element={<EllipticCurvePairings />} />
						{/* section 2 */}
						{/* section 3 */}
					</Routes>
				</div>
				<footer></footer>
			</div>
		</Router>
	);
}

export default App;
