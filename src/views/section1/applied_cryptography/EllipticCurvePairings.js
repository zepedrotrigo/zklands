import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import 'animate.css';

function EllipticCurvePairings() {
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
                <h3>Elliptic Curve Pairings</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>An elliptic curve pairing is a bilinear map that takes a pair of points on the elliptic curve and outputs an element of some other group.</p>
                    <center><p><span class="math display"><em>e</em> : <em>G</em><sub>1</sub> × <em>G</em><sub>2</sub> → <em>G</em><sub><em>T</em></sub></span></p></center>
                    <p>The fact that this function is bilinear means that:</p>
                    <ul>
                        <li><p><span class="math inline"><em>e</em>(<em>P</em>,<em>Q</em>+<em>R</em>) = <em>e</em>(<em>P</em>,<em>Q</em>) ⋅ <em>e</em>(<em>P</em>,<em>R</em>)</span></p></li>
                        <li><p><span class="math inline"><em>e</em>(<em>P</em>+<em>Q</em>,<em>R</em>) = <em>e</em>(<em>P</em>,<em>R</em>) ⋅ <em>e</em>(<em>Q</em>,<em>R</em>)</span></p></li>
                    </ul>
                    <p>So it also follows that:</p>
                    <ul>
                        <li><p><span class="math inline"><em>e</em>(<em>a</em>⋅<em>P</em>,<em>Q</em>) = <em>e</em>(<em>P</em>,<em>Q</em>)<sup><em>a</em></sup></span></p></li>
                        <li><p><span class="math inline"><em>e</em>(<em>P</em>,<em>b</em>*<em>Q</em>) = <em>e</em>(<em>P</em>,<em>Q</em>)<sup><em>b</em></sup></span></p></li>
                    </ul>
                    <p>A paring also need to have non-degeneracy - <span class="math inline"><em>e</em>(<em>P</em>,<em>Q</em>) ≠ 1</span>.</p>
                    <p>To have a simple understanding about how pairings works, let’s suppose we have a equation such <span class="math inline"><em>x</em><sup>2</sup> − 2027 + 16152</span> and I want to convince some that I know some integer solution <span class="math inline"><em>a</em></span> of the equation, without revealing it.<br />
                        Using pairings it’s possible. We choose a pair of elliptic points such as <span class="math inline"><em>P</em> ∈ <em>G</em><sub>1</sub></span> and <span class="math inline"><em>Q</em> ∈ <em>G</em><sub>2</sub></span>, then compute <span class="math inline"><em>a</em> ⋅ <em>P</em></span> and <span class="math inline"><em>b</em> ⋅ <em>Q</em></span>. Then we share <span class="math inline"><em>a</em>, <em>b</em>, <em>a</em> ⋅ <em>P</em>, <em>b</em> ⋅ <em>Q</em></span>.</p>
                    <p>Using a paring the prover computes:</p>
                    <center><p><span class="math display"><em>e</em>(<em>a</em>⋅<em>P</em>,<em>a</em>⋅<em>Q</em>)<em>e</em>(<em>P</em>,−2027<em>a</em>⋅<em>Q</em>)<em>e</em>(<em>P</em>,16152⋅<em>Q</em>)</span></p></center>
                    <p>By bilinearity it’s equal to</p>
                    <center><p><span class="math display"><em>e</em>(<em>P</em>,<em>Q</em>)<sup><em>a</em><sup>2</sup> − 2027<em>a</em> + 16152</sup></span></p></center>
                    <p>Which is <span class="math inline"><em>a</em></span> is indeed a root of the equation this value is going to be equal to <span class="math inline">0</span>.<br />
                        In a zk-SNARK, elliptic curve pairings are used to check a system of quadratic constraints like the one above. The system of constraints is converted into a single large polynomial that has particular roots only if each of the quadratic constraints is satisfied.</p>

                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default EllipticCurvePairings;