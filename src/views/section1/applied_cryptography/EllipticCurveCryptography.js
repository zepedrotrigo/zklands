import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function EllipticCurveCryptography() {
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
                <h3>Elliptic Curve Cryptography</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Elliptic Curves Cryptography is a protocol that relies on Elliptic Curves and in the use of trapdoors functions, i.e. functions that are easy to compute in one way, but difficult to compute in the opposite direction (finding its inverse).</p>
                    <p>Let’s start by exploring what is an elliptic curve. Simply put an elliptic curve is the set of points described by the equation <span class="math display"><em>y</em><sup>2</sup> = <em>x</em><sup>3</sup> + <em>a</em><em>x</em> + <em>b</em></span></p>
                    <p>where <span class="math inline">4<em>a</em><sup>3</sup> + 27<em>b</em><sup>2</sup> ≠ 0</span> (this is necessary to exclude singular curves, so all roots are different). Depending on the value of <span class="math inline"><em>a</em></span> and <span class="math inline"><em>b</em></span>, elliptic curves display differently on the plane, however as it can be easy proved, elliptic curves are symmetric about the <span class="math inline"><em>x</em></span>-axis.</p>
                    <p>For our propose we also need a point at infinity which is usually denoted as <span class="math inline">0</span>.</p>
                    <p>Taking this point we can form a new definition of elliptic curves as it follows:</p>
                    <center><Latex>{`$$\\{ (x,y) \\in \\mathbb{R}:\\   y^2=x^3+ax+b,\\ 4a^3+27b^2 \\neq 0\\} \\cup \\{0\\}$$`}</Latex></center><br></br>

                    <p>For the remaining of this chapter the concept of group is required which can be studied in our Abstract Algebra chapter.</p>
                    <p>Over elliptic curves we can define a group using geometry, as it follows:</p>
                    <ul>
                        <li><p>the elements of the group are the points of the elliptic curve;</p></li>
                        <li><p>the identity is the point at infinity 0;</p></li>
                        <li><p>the inverse of a point <span class="math inline"><em>P</em></span> is the one symetric about the <span class="math inline"><em>x</em></span>-axis and is denoted as <span class="math inline"> − <em>P</em></span>;</p></li>
                        <li><p>the addition is defined as: given three aligned, non-zero, points <span class="math inline"><em>P</em>, <em>Q</em></span> and <span class="math inline"><em>R</em></span>, their sum is <span class="math inline"><em>P</em> + <em>Q</em> + <em>R</em> = 0</span>.</p></li>
                    </ul>
                    <p>Since this addition is commutative, the group is an Abelian group. Using this fact we can rewrite <span class="math inline"><em>P</em> + <em>Q</em> + <em>R</em> = 0</span> as <span class="math inline"><em>P</em> + <em>Q</em> =  − <em>R</em></span>, which give us a intuitive and geometric way to compute the sum between two points <span class="math inline"><em>P</em></span> and <span class="math inline"><em>Q</em></span>: we draw a line trough <span class="math inline"><em>P</em></span> and <span class="math inline"><em>Q</em></span>, this line will intersect a third point on the curve (implied by the fact that originally all points were aligned). If we take the symmetric of this point about the <span class="math inline"><em>x</em></span>-axis, we have found <span class="math inline"> − <em>R</em></span> which is the result of <span class="math inline"><em>P</em> + <em>Q</em></span>.</p>
                    <p>For this method to work we still need to address some issues:</p>
                    <ul>
                        <li><p>What happens if <span class="math inline"><em>Q</em> =  − <em>P</em></span>? In this case, we have a vertical line which doesn’t intersect any third point, but we have <span class="math inline"><em>P</em> + <em>Q</em> = <em>P</em> + (−<em>P</em>) = 0</span> since we define <span class="math inline"> − <em>P</em></span> as the inverse of <span class="math inline"><em>P</em></span>.</p></li>
                        <li><p>What if <span class="math inline"><em>P</em> = <em>Q</em></span>? In this case there are infinetly many line passing through the point, so to solve this issue we simply take the tangent line to the curve at the point <span class="math inline"><em>P</em></span> and find the intersection, <span class="math inline"><em>R</em></span>, between the curve and this line, then we have <span class="math inline"><em>P</em> + <em>P</em> =  − <em>R</em></span>.</p></li>
                        <li><p>If <span class="math inline"><em>P</em> ≠ <em>Q</em></span>, but there is no third point <span class="math inline"><em>R</em></span>, then the line must be tangent to the curve at <span class="math inline"><em>P</em></span> or <span class="math inline"><em>Q</em></span>. Let’s assume it’s at <span class="math inline"><em>P</em></span> then as previously we have <span class="math inline"><em>P</em> + <em>P</em> =  − <em>Q</em></span> which can be rewritten as <span class="math inline"><em>P</em> + <em>Q</em> =  − <em>P</em></span>.</p></li>
                    </ul>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/applied_cryptography/polynomial_commitment_schemes`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/applied_cryptography/elliptic_curve_cryptography2`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default EllipticCurveCryptography;