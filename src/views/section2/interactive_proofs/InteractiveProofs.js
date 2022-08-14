import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function InteractiveProofs() {
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
                <h3>Interactive Proofs</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Given <span class="math inline"><em>f</em>(<em>x</em>) = <em>g</em><sup><em>x</em></sup></span>, Alice wants to prove Bob she knows <span class="math inline"><em>x</em></span> without revealing any information about <span class="math inline"><em>x</em></span>. Bob knows <span class="math inline"><em>f</em>(<em>x</em>) = <em>g</em><sup><em>x</em></sup></span>.</p>
                    <ol>
                        <li><p>Alice picks a random number <span class="math inline"><em>r</em></span></p></li>
                        <li><p>Alice sends Bob <span class="math inline"><em>u</em> = <em>g</em><sup><em>r</em></sup></span></p></li>
                        <li><p>Bob sends to Alice a challenge <span class="math inline"><em>c</em></span> (<span class="math inline"><em>c</em></span> can be any number)</p></li>
                        <li><p>Alice returns a response to Bob’s challenge:</p>
                            <ul>
                                <li><p><span class="math inline"><em>v</em> = <em>r</em> − <em>c</em> × <em>x</em></span></p></li>
                            </ul></li>
                        <li><p>Bob verifies Alice’s response:</p>
                            <ul>
                                <li><Latex>{`$u = f(v) \\times f(x)^c$`}</Latex></li>
                                <li><Latex>{`$u = g^v \\times (g^x)^c$`}</Latex></li>
                                <li><Latex>{`$u = g^{r-x \\times c} \\times g^{x \\times c}$`}</Latex></li>
                                <li><Latex>{`$u = g^r$`}</Latex></li>
                                <li><Latex>{`$g^r = g^r$`}</Latex></li>
                            </ul>
                        </li>
                    </ol>
                    <p>if <span class="math inline"><em>u</em> = <em>f</em>(<em>v</em>) × <em>f</em>(<em>x</em>)<sup><em>c</em></sup></span>, Bob can verify that Alice does indeed know the value of x (Valid Proof).</p>
                    <p>Multiple rounds of this process are performed with a different <span class="math inline"><em>r</em></span> for each round.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/interactive_proofs/rsa_encryption_scheme`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default InteractiveProofs;