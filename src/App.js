import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import DigitalSignatures from './views/section1/applied_cryptography/DigitalSignatures';
import PublicKeyEncryption from './views/section1/applied_cryptography/PublicKeyEncryption';
import MerkleTrees from './views/section1/applied_cryptography/MerkleTrees';
import PolynomialCommitmentSchemes from './views/section1/applied_cryptography/PolynomialCommitmentSchemes';
import EllipticCurveCryptography from './views/section1/applied_cryptography/EllipticCurveCryptography';
import EllipticCurvePairings from './views/section1/applied_cryptography/EllipticCurvePairings';
import InteractiveProofs from './views/section2/interactive_proofs/InteractiveProofs';
import RsaEncryptionScheme from './views/section2/interactive_proofs/RsaEncryptionScheme';
import FiatShamir from './views/section2/interactive_proofs/FiatShamir';
import ZkpProperties from './views/section2/zkp_properties/ZkpProperties';
import ChineseRemainderTheorem from './views/section1/modular_arithmetic/ChineseRemainderTheorem';
import ModularInverses from './views/section1/modular_arithmetic/ModularInverses';
import GroupsAndFields from './views/section1/algebra_and_discrete_maths/GroupsAndFields';
import Polynomials from './views/section1/algebra_and_discrete_maths/Polynomials';

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
						{/* topic 1 */}
						<Route path="/applied_cryptography/digital_signatures" element={<DigitalSignatures />} />
						<Route path="/applied_cryptography/public_key_encryption" element={<PublicKeyEncryption />} />
						<Route path="/applied_cryptography/merkle_trees" element={<MerkleTrees />} />
						<Route path="/applied_cryptography/polynomial_commitment_schemes" element={<PolynomialCommitmentSchemes />} />
						<Route path="/applied_cryptography/elliptic_curve_cryptography" element={<EllipticCurveCryptography />} />
						<Route path="/applied_cryptography/elliptic_curve_pairings" element={<EllipticCurvePairings />} />
						{/* topic 2 */}
						<Route path="/modular_arithmetic/chinese_remainder_theorem" element={<ChineseRemainderTheorem />} />
						<Route path="/modular_arithmetic/modular_inverses" element={<ModularInverses />} />
						{/* topic 3 */}
						<Route path="/algebra_and_discrete_maths/groups_and_fields" element={<GroupsAndFields />} />
						<Route path="/algebra_and_discrete_maths/polynomials" element={<Polynomials />} />
						{/* topic 4 */}

						{/* section 2 */}
						{/* topic 1 */}
						<Route path="/interactive_proofs/interactive_proofs" element={<InteractiveProofs />} />
						<Route path="/interactive_proofs/rsa_encryption_scheme" element={<RsaEncryptionScheme />} />
						<Route path="/interactive_proofs/fiat_shamir" element={<FiatShamir />} />
						{/* topic 2 */}
						<Route path="/zkp_properties/zkp_properties" element={<ZkpProperties />} />
						{/* section 3 */}
					</Routes>
				</div>
				<footer></footer>
			</div>
		</Router>
	);
}

export default App;
