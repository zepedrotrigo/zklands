import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';

function FiatShamir() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Container extClass="container bg-margin no-anim">
                <h3>ZK Lands</h3>
                <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container extClass="container bg-margin bg-padding no-anim">
                <h3>Fiat-Shamir</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>The Fiat-Shamir heuristic is a technique that given an interactive proof of knowledge creates a digital signature from it. Because of Fiat-Shamir, any interactive proof of knowledge can be transformed into a non-interactive one, in theory, by using a random oracle access. In practice, we use a cryptographic hash function for this purpose.</p>
                    <ol>
                        <li><p>Given <span class="math inline"><em>f</em><em>x</em>) = <em>g</em><sup><em>x</em></sup></span>, Alice wants to prove Bob she knows <span class="math inline"><em>x</em></span></p></li>
                        <li><p>She picks a random number <span class="math inline"><em>r</em></span> and computes <span class="math inline"><em>u</em> = <em>g</em><sup><em>r</em></sup></span></p></li>
                        <li><p>Alice computes <span class="math inline"><em>c</em> = <em>H</em>(<em>u</em>)</span>, where <span class="math inline"><em>H</em></span> is a hash function and <span class="math inline"><em>c</em></span> an integer</p></li>
                        <li><p>She computes <span class="math inline"><em>v</em> = <em>r</em> − <em>c</em><em>x</em></span></p></li>
                        <li><p>Any verifier can calculate <span class="math inline"><em>c</em></span> and verify if <span class="math inline"><em>u</em> ≡ <em>g</em><sup><em>r</em></sup><em>y</em><sup><em>c</em></sup></span></p></li>
                    </ol>
                    <p>Both Alice and Bob calculate H(u) individually and do not pass it, therefore this protocol is considered a non interactive proof</p>

                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default FiatShamir;