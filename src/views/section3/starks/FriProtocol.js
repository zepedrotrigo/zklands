import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function FriProtocol() {
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
                <h3>ZK-STARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="fri-protocol">FRI protocol</h6>
                    <p>Our main goal right now is to show that <span class="math inline"><em>C</em><em>P</em></span> is a polynomial, however using <span class="math inline"><em>F</em><em>R</em><em>I</em></span> (Fast Reed-Solomon Interactive Oracle Proofs) we just need to prove that <span class="math inline"><em>C</em><em>P</em></span> is close to a polynomial <span class="math inline"><em>p</em></span> of low degree, that is <span class="math inline"><em>C</em><em>P</em></span> differs from a polynomial <span class="math inline"><em>p</em></span> is a short number of points and <span class="math inline"><em>C</em><em>P</em></span>’s degree is bounded by some number <span class="math inline"><em>D</em></span>.</p>
                    <p>For this to work we:</p>
                    <ul>
                        <li><p>Receive a random number <span class="math inline"><em>β</em></span></p></li>
                        <li><p>Apply the <span class="math inline"><em>F</em><em>R</em><em>I</em></span> operator</p></li>
                        <li><p>Commit</p></li>
                        <li><p>Repeat the process until we can send the result (a constant)</p></li>
                    </ul>
                    <p>The <span class="math inline"><em>F</em><em>R</em><em>I</em></span> operation is a method which will allows us to take our main goal ( <span class="math inline"><em>C</em><em>P</em></span> is close to a polynomial of degree bounded by <span class="math inline"><em>D</em></span> ) and prove that a new function with half the domain is close to a new polynomial bounded by half of the degree, by doing it repeatably we find a new objective which is proving that a new function, with half of the domain of the previous one, is close to a new polynomial bounded half of the degree of the previous one.<br />
                    </p>
                    <p>How the <span class="math inline"><em>F</em><em>R</em><em>I</em></span> operator works:</p>
                    <ol>
                        <li><p>Split to even and odd powers <span class="math inline"><em>P</em><sub>0</sub>(<em>x</em>) = <em>g</em>(<em>x</em><sup>2</sup>) + <em>x</em><em>h</em>(<em>x</em><sup>2</sup>)</span></p></li>
                        <li><p>Get a random <span class="math inline"><em>β</em></span>, from the verifier</p></li>
                        <li><p>Consider a new function <span class="math inline"><em>P</em><sub>1</sub>(<em>y</em>) = <em>g</em>(<em>y</em>) + <em>β</em><em>h</em>(<em>y</em>)</span></p></li>
                    </ol>
                    <p>We repeat this process until we reach a step where the polynomial is bounded by <span class="math inline">1</span>, which means that the result must be a constant.<br />
                        For example, let’s assume: <span class="math inline"><em>P</em><sub>0</sub>(<em>x</em>) = 5<em>x</em><sup>5</sup> + 3<em>x</em><sup>4</sup> + 7<em>x</em><sup>3</sup> + 2<em>x</em><sup>2</sup> + <em>x</em> + 3</span> and to an iteration of this operator</p>
                    <ol>
                        <li><p>The even terms of <span class="math inline"><em>P</em><sub>0</sub></span> are: <span class="math inline">3<em>x</em><sup>4</sup>, 2<em>x</em><sup>2</sup></span> and <span class="math inline">3</span>, so <span class="math inline"><em>g</em>(<em>x</em><sup>2</sup>) = 3<em>x</em><sup>4</sup> + 2<em>x</em><sup>2</sup> + 3</span>.<br />
                            The same applies for the odd terms, so <span class="math inline"><em>x</em><em>h</em>(<em>x</em><sup>2</sup>) = 5<em>x</em><sup>5</sup> + 7<em>x</em><sup>3</sup> + <em>x</em> = <em>x</em>(5<em>x</em><sup>4</sup>+7<em>x</em><sup>2</sup>+1)</span></p></li>
                        <li><p>Receive a random <span class="math inline"><em>β</em></span></p></li>
                        <li><p>Now, if <span class="math inline"><em>x</em><sup>2</sup> = <em>y</em></span> then <span class="math inline"><em>g</em>(<em>y</em>) = 3<em>y</em><sup>2</sup> + 2<em>y</em> + 3</span> and <span class="math inline"><em>h</em>(<em>y</em>) = 5<em>y</em><sup>2</sup> + 7<em>y</em> + 1</span>.<br />
                            So <span class="math inline"><em>P</em><sub>1</sub>(<em>x</em>) = <em>g</em>(<em>y</em>) + <em>β</em><em>h</em>(<em>y</em>) = 3<em>y</em><sup>2</sup> + 2<em>y</em> + 3 + <em>β</em>(5<em>y</em><sup>2</sup>+7<em>y</em>+1) = (3+5<em>β</em>)<em>y</em><sup>2</sup> + (2+7<em>β</em>)<em>y</em> + 3 + <em>β</em></span></p></li>
                    </ol>
                    <p>If we take a closer inspection, we can se that <span class="math inline"><em>P</em><sub>0</sub></span> is bounded by degree <span class="math inline">6</span> while <span class="math inline"><em>P</em><sub>1</sub></span> is bounded by a degree <span class="math inline">3</span>.</p>
                    <p>We must repeat this process in order to reach a constant and commit it.</p>

                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/zk_starks/polynomial_constraints`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_starks/proofs_polynomials`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default FriProtocol;