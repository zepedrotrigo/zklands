import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/starks_paths.png'

function Introduction() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Link to={`/zklands`} style={{ textDecoration: "none" }}>
                <Container extClass="container home no-anim">
                    <h3>ZK Lands</h3>
                    <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
                </Container>
            </Link>
            <Container extClass="container  bg-padding no-anim">
                <h3>ZK-STARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="introduction-overview">Introduction/ Overview</h6>
                    <p>The term ZK-STARKs is short for Zero-Knowledge Scalable Transparent ARguments of Knowledge, which by itself shows that zk-STARKs try to improve some of the problems of zk-SNARKs. The term “Transparent” means that zk-STARKs don’t rely on a trusted setup ceremony because they use much weaker cryptographic assumptions, using collision resistant hash functions, which also means that they are secure against quantum computers. However, the size of its proofs is larger, taking longer to verify and making the gas fees higher. So, sometimes the cost will not be worth it, but at other times, particularly in the context of public blockchain applications where the need for trust minimization is high, it may well be.<br />
                    </p>
                    <p>Although zk-SNARKS are scalable, zk-STARKs are even more scalable, hence the word in the name - the way STARKs improve scalability is by moving computations and storage off-chain. Then a STARK proof is generated and placed back on chain - which allows the blockchain to scale while maintaining integrity.<br />
                    </p>
                    <p>zk-STARKS are quite recent, they have been around for 3 or 4 years, so this technology still has much to grow and has less documentation and support compared with zk-SNARKs, however its community is starting to grow.<br />
                    </p>
                    <p>We can think of STARKs as a form of SNARKs that only use hash functions, uses algebraic intermediate representation (AIR) and makes claims about low degree polynomials which are proven using Fast Reed-Solomon IOP of Proximity (FRI). The path to STARKs is often breakdown into several milestones and step as we can see in the following graph:<br />
                    </p>
                    <center><img src={img1}></img></center><br></br>
                    <p>The computation is usually some form of program, an input and and output and our main objective is to transform this into a "friendly" format that enables resource-constrained verifier to verify its integrity, for this we use Arithmetization in a way that allows us to transform sequences of logical and arithmetical operations on strings of bits into an equivalent sequence of finite field operations on finite field elements, so that way both sequences represent the same computation. The output is an arithmetic constraint system, essentially a bunch of equations with coefficients and variables taking values from the finite field, which has boundary constraints and also transition constraints. This set of constraints is usually known as AIR.<br />
                        For the Intepolation transform we simply want to find a way to represent our arithmetic constraint system in terms of polynomials, which will produce a Polynomial interactive oracle proof, which are oracles of low degree polynomials, therefore after the interpolation step, we are only making claims about low degree polynomials.<br />
                        However in practice polynomial oracles do not exist. If we want to use Polynomial IOP as an intermediate stage we must use FRI which allows us to commit to a polynomial and then open that polynomial in a point of the verifier’s choosing, using merkle trees.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/zklands>`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_starks/tools_statements`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Introduction;