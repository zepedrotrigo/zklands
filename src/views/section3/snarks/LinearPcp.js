import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/QAP.png'

function LinearPcp() {
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
                <h3>ZK-SNARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>

                    <h6 class="title" id="linear-pcp">Linear PCP</h6>

                    <p>A probabilistically checkable proof (PCP) is a type of proof which states that proofs for any NP language can be encoded in such a way that their validity can be verified by reading only a constant number of random bits of the proof, with an error probability that is upper bounded by a constant. In other words, a PCP is an oracle proof where the prover sends a string <span class="math inline"><em>π</em></span> and the verifier has oracle access to query locations of <span class="math inline"><em>π</em></span> without reading the whole string.</p>
                    <ul>
                        <li><p><strong>Probabilistic Verifier:</strong> It can have different outputs for the same inputs <span class="math inline"><em>x</em></span>.</p></li>
                        <li><p><strong>Random Access to the Proof:</strong> Any bit in the proof string <span class="math inline"><em>π</em></span> can be randomly queried by the verifier.</p></li>
                        <li><p><strong>Constant Number of Queries:</strong> Despite using probabilistic verification procedures, we are able to make meaningful verdicts about the validity of the alleged proofs. The verification procedure should always accept valid proofs, but reject invalid ones with a probability of at least 50<span class="math inline">%</span>.</p></li>
                        <li><p><strong>Adaptiveness:</strong> A non-adaptive verifier selects its queries from its own inputs and randomness while an adaptive verifier can also rely upon bits it has already queried in <span class="math inline"><em>π</em></span> to select its next queries.</p></li>
                    </ul>
                    <p>In a linear PCP the proof is a vector of elements of a finite field where only linear operations are allowed.</p>

                    <p>While in a standard PCP the verifier makes a bounded number of queries to access individual bits of the proof string <span class="math inline"><em>π</em></span>, in a linear PCP, the verifier is allowed to take an arbitrary linear combination of the entries of <span class="math inline"><em>π</em></span>. The prover sends a proof vector <span class="math inline"><em>π</em></span> over a finite field <span class="math inline">𝔽</span> and then, the verifier queries random locations <span class="math inline"><em>q</em> ∈ 𝔽<sup><em>n</em></sup></span> that return the inner product <span class="math inline">⟨<em>π</em>, <em>q</em><sub><em>i</em></sub>⟩</span>.</p>

                </h6>
                <div class='arrowsGroup'>
                    <Link to={`/zk_snarks/qap`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_snarks/linear_ip`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div >
    )
}

export default LinearPcp;