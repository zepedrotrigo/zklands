import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/ProofGeneration.jpg'

function Snarks() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Container extClass="container  no-anim">
                <h3>ZK Lands</h3>
                <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container extClass="container  bg-padding no-anim">
                <h3>ZK-SNARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>zk-SNARKs possess many pratical applications in what regards scalability, like bundling many transactions into a single proof, compressing blockchains, and privacy <a href="https://z.cash/">(Zcash)</a>.</p>
                    <p>zk-SNARK proofs require an initial trusted setup ceremony. In this process, a set of keys required to create the proofs that allow private transactions are created along with hidden parameters that are encoded into the protocol and necessary to verify the validity of transactions. This creates a potential centralization issue since the ceremony is often attended by a relatively small group of individuals.</p>
                    <p>Users of the network need to rely upon the fact that the trusted set up ceremony was correctly executed without malicious intentions. If by any chance the secrets used in the ceremony were not destroyed and are being kept by the individuals who participated in it, they could be used to create false verifications and, therefore, false transactions, allowing one to create tokens out of thin air, for example.</p>
                    <p>The need for a trusted set-up ceremony is one of the strongest arguments held against zk-SNARKs, even though the set-up is only done initially and not in a continuous way. Because of this fact, smart contracts are unfeasable, since it is impossible to perform a a setup for each arbitrary computation.</p>
                    <p>Note: newer zk-SNARKs constructs fix the trusted setup limitations, allowing for for arbitrary code programs such as smart contracts to be possible.</p><br></br>
                    <center><img src={img1} style={{width:'75%', height:'75%'}}></img></center>
                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default Snarks;