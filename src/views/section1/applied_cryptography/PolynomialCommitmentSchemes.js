import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';

function PolynomialCommitmentSchemes() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Link to={`/`} style={{ textDecoration: "none" }}>
                <Container extClass="container home no-anim">
                    <h3>ZK Lands</h3>
                    <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
                </Container>
            </Link>
            <Container extClass="container  bg-padding no-anim">
                <h3>Polynomial Commitment Schemes</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>A polynomial commitment scheme allows a prover to compute a commitment to a polynomial. This commitment can later be opened at any position: The prover shows that the value of the polynomial at a certain position is equal to a claimed value.</p>
                    <p>A trusted-setup procedure generates a set of elliptic curve points <span class="math inline"><em>G</em>, <em>G</em> ⋅ <em>s</em>, <em>G</em> ⋅ <em>s</em><sup>2</sup>, …, <em>G</em> ⋅ <em>s</em><sup><em>n</em></sup></span>, as well as <span class="math inline"><em>G</em><sub>2</sub> ⋅ <em>s</em></span>, where <span class="math inline"><em>G</em></span> and <span class="math inline"><em>G</em><sub>2</sub></span> are the generators of two elliptic curve groups and <span class="math inline"><em>s</em></span> is a secret that is forgotten once the procedure is finished.</p>
                    <p>These points are published and considered to be "the proving key" of the scheme; anyone who needs to make a polynomial commitment will need to use these points.</p>
                    <p>A commitment to a degree-d polynomial is made by multiplying each of the first <span class="math inline"><em>d</em> + 1</span> points in the proving key by the corresponding coefficient in the polynomial, and adding the results together.</p>
                    <p>For example, <span class="math inline"><em>x</em><sup>3</sup> + 2<em>x</em><sup>2</sup> + 5</span> would be represented by <span class="math inline">(<em>G</em>⋅<em>s</em><sup>3</sup>) + 2 ⋅ (<em>G</em>⋅<em>s</em><sup>2</sup>) + 5 ⋅ <em>G</em></span>. This provides an "evaluation" of that polynomial at <span class="math inline"><em>s</em></span>, without knowing <span class="math inline"><em>s</em></span>.</p>
                    <p>Given a polynomial <span class="math inline"><em>f</em>(<em>x</em>)</span>, if one evaluates it at some other point <span class="math inline"><em>B</em></span> then <span class="math inline"><em>f</em>(<em>x</em>) − <em>f</em>(<em>B</em>)</span> is divisible by <span class="math inline"><em>x</em> − <em>B</em></span>.</p>
                    <p>To prove that the original commitment was an encrypted evaluation of some polynomial at <span class="math inline"><em>s</em></span>, the verifier provides a random point <span class="math inline"><em>B</em></span> and the prover proves that <span class="math inline"><em>f</em>(<em>s</em>) − <em>f</em>(<em>B</em>)</span> is divisible by <span class="math inline"><em>s</em> − <em>B</em></span>. If the proof is wrong, the polynomial division cannot be performed, as there will always be a remainder.</p>

                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/applied_cryptography/merkle_trees`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/applied_cryptography/elliptic_curve_cryptography`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default PolynomialCommitmentSchemes;