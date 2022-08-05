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
import Theorems from './views/section1/number_theory/Theorems';
import QuadraticResidues from './views/section1/number_theory/QuadraticResidues';
import ExtendedEuclideanAlgorithm from './views/section1/number_theory/ExtendedEuclideanAlgorithm';
import AlgebraicCircuits from './views/section3/snarks/AlgebraicCircuits';
import R1cs from './views/section3/snarks/R1cs';
import Qap from './views/section3/snarks/Qap';
import LinearPcp from './views/section3/snarks/LinearPcp';
import LinearIP from './views/section3/snarks/LinearIP';
import Snarks from './views/section3/snarks/Snarks';
import Introduction from './views/section3/starks/Introduction';
import BasicToolsStatements from './views/section3/starks/BasicToolsStatements';
import PolynomialConstraints from './views/section3/starks/PolynomialConstraints';
import FriProtocol from './views/section3/starks/FriProtocol';
import ProofsWithPolynomials from './views/section3/starks/ProofsWithPolynomials';
import MoreProofSystems from './views/section3/more_proof_systems/MoreProofSystems';
import Intro from './views/section3/pratical_use_cases/Intro';
import IdentityWhy from './views/section3/pratical_use_cases/IdentityWhy';
import IdentityHow from './views/section3/pratical_use_cases/IdentityHow';
import IdentityHowPart2 from './views/section3/pratical_use_cases/IdentityHowPart2';
import MachineLearning from './views/section3/pratical_use_cases/MachineLearning';
import Voting from './views/section3/pratical_use_cases/Voting';

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
						<Route path="/number_theory/theorems" element={<Theorems />} />
						<Route path="/number_theory/quadratic_residues" element={<QuadraticResidues />} />
						<Route path="/number_theory/extended_euclidean_algorithm" element={<ExtendedEuclideanAlgorithm />} />
						{/* section 2 */}
						{/* topic 1 */}
						<Route path="/interactive_proofs/interactive_proofs" element={<InteractiveProofs />} />
						<Route path="/interactive_proofs/rsa_encryption_scheme" element={<RsaEncryptionScheme />} />
						<Route path="/interactive_proofs/fiat_shamir" element={<FiatShamir />} />
						{/* topic 2 */}
						<Route path="/zkp_properties/zkp_properties" element={<ZkpProperties />} />
						{/* section 3 */}
						{/* topic 1 */}
						<Route path="/zk_snarks/algebraic_circuits" element={<AlgebraicCircuits />} />
						<Route path="/zk_snarks/r1cs" element={<R1cs />} />
						<Route path="/zk_snarks/qap" element={<Qap />} />
						<Route path="/zk_snarks/linear_pcp" element={<LinearPcp />} />
						<Route path="/zk_snarks/linear_ip" element={<LinearIP />} />
						<Route path="/zk_snarks/snarks" element={<Snarks />} />
						{/* topic 2 */}
						<Route path="/zk_starks/intro" element={<Introduction />} />
						<Route path="/zk_starks/tools_statements" element={<BasicToolsStatements />} />
						<Route path="/zk_starks/polynomial_constraints" element={<PolynomialConstraints />} />
						<Route path="/zk_starks/fri" element={<FriProtocol />} />
						<Route path="/zk_starks/proofs_polynomials" element={<ProofsWithPolynomials />} />
						{/* topic 3 */}
						<Route path="/more_proof_systems/intro" element={<MoreProofSystems />} />
						{/* topic 4 */}
						<Route path="/use_cases/intro" element={<Intro />} />
						<Route path="/use_cases/identity_why" element={<IdentityWhy />} />
						<Route path="/use_cases/identity_how" element={<IdentityHow />} />
						<Route path="/use_cases/identity_how2" element={<IdentityHowPart2 />} />
						<Route path="/use_cases/machine_learning" element={<MachineLearning />} />
						<Route path="/use_cases/voting" element={<Voting />} />



					</Routes>
				</div>
				<footer></footer>
			</div>
		</Router>
	);
}

export default App;
