import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';

function MoreProofSystems() {
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
                <h3>More Proof Systems</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Besides zk-SNARKs and zk-STARKS, there are many more proof systems like PLONK and Halo2 that provide many new features and upgrades that greatly improve the usability of zk-proofs.</p>
                    <br></br><h6 id="plonk">PLONK</h6>
                    <ul>
                        <li><p>Universal reference string that is able to build proofs with any type of circuit without the need to redo the trusted setup process.</p></li>
                        <li><p>Uses a multi-party computation trusted setup and a constantly updated reference string to further decrease the probability of a dishonest setup.</p></li>
                        <li><p>Compatibility with any trade off between proof size and security assumptions, allowing for the use of the same tooling in different use cases.</p></li>
                    </ul>
                    <br></br><h6 id="halo2">Halo2</h6>
                    <ul>
                        <li><p>Developed by Zcash.</p></li>
                        <li><p>Recursive zero-knowledge proof system that does not require trusted setup.</p></li>
                        <li><p>Because of being recursive, it is capable of verifying massive amounts of computation by chaining many verifications together.</p></li>
                    </ul>
                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default MoreProofSystems;