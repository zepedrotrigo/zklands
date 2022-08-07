import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function EllipticCurveCryptographyPart2() {
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
                <h3>Elliptic Curve Cryptography</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p><strong>Algebraic Addition</strong>:</p>
                    <p>Aside from the easy cases where <span class="math inline"><em>P</em></span> or <span class="math inline"><em>Q</em></span> is <span class="math inline">0</span>, or there are each other inverses, we can define a computation to find the result of <span class="math inline"><em>P</em> + <em>Q</em></span> as it follows:</p>
                    <p>First we write <span class="math inline"><em>P</em> = (<em>x</em><sub><em>P</em></sub>,<em>y</em><sub><em>P</em></sub>)</span> and <span class="math inline"><em>Q</em> = (<em>x</em><sub><em>Q</em></sub>,<em>y</em><sub><em>Q</em></sub>)</span> and we define a variable <span class="math inline"><em>λ</em></span> such:</p>
                    <Latex>{`$$\\lambda=\\begin{cases}
                                \\frac{y_P-y_Q}{x_P-x_Q} \\enspace\\text{if } P \\neq Q\\\\
                                \\frac{3{x_P}^2+a}{2y_P} \\enspace \\text{if } P =Q
                            \\end{cases}$$`}
                    </Latex>
                    <p>Then <span class="math inline"><em>x</em><sub><em>R</em></sub> = <em>λ</em><sup>2</sup> − <em>x</em><sub><em>P</em></sub> − <em>x</em><sub><em>Q</em></sub></span> and <Latex>{`$-y_R=\lamda(x_P-x_R)-y_P \pmod p$`}</Latex></p>
                    <p>We can conclude that <span class="math inline"><em>P</em> + <em>Q</em> =  − <em>R</em></span>, where <span class="math inline"> − <em>R</em> = (<em>x</em><sub><em>R</em></sub>,−<em>y</em><sub><em>R</em></sub>)</span>.<br />
                        <br></br><strong>Scalar Multiplication</strong>:</p>
                    <p>We can now define another operation as:</p>
                    <p><span class="math display"><em>n</em><em>P</em> = <em>P</em> + <em>P</em> + … + <em>P</em></span></p>
                    <p>The hardness of using this method is the fact that given <span class="math inline"><em>Q</em></span> and <span class="math inline"><em>P</em></span> and assuming <span class="math inline"><em>Q</em> = <em>n</em><em>P</em></span> for some <span class="math inline"><em>n</em></span>,it’s really hard to find out <span class="math inline"><em>n</em></span>. This problem is known as the logarithm problem. To make this even "harder" and to bound our computations, we can restrict our elliptic curves over a finite field (which is discussed in our abstract algebra chapter). This means that we look at the curve modulo the characteristic p and an elliptic curve will no longer be a curve, but a collection of points whose coordinates are integers in <span class="math inline">𝔽<sub><em>p</em></sub></span>. With that, we find a new definition to our elliptic curves:</p>
                    <Latex>{`$$E(\\mathbb{F}_p)=\\{ (x,y) \\in (\\mathbb{F}_p)^2:\\   y^2\\equiv x^3+ax+b \\pmod p,\\ 4a^3+27b^2 \\not\\equiv 0  \\pmod p\\} \\cup \\{0\\}$$`}</Latex>
                    <p>With this newer definition our properties need a little refinement in order to behave correctly under <span class="math inline">𝔽<sub><em>p</em></sub></span>.</p>
                    <p>For instance, we can still say that if three points are aligned then <span class="math inline"><em>P</em> + <em>Q</em> + <em>R</em> = 0</span>, but our definition of line changes a little. A line in <span class="math inline">𝔽<sub><em>p</em></sub></span> is the set of points that verify <span class="math inline"><em>y</em> ≡ <em>a</em><em>x</em> + <em>b</em> (mod  <em>p</em>)</span>, with <span class="math inline"><em>a</em>, <em>b</em> ∈ 𝔽<sub><em>p</em></sub></span>.</p>
                    <p>The algebraic sum works as intended but we need to remember we are working under a finite field so instead for <span class="math inline"><em>P</em> = (<em>x</em><sub><em>P</em></sub>,<em>y</em><sub><em>P</em></sub>), <em>Q</em> = (<em>x</em><sub><em>Q</em></sub>,<em>y</em><sub><em>Q</em></sub>) ∈ <em>E</em>(𝔽<sub><em>p</em></sub>)</span>, we write <span class="math inline"><em>λ</em></span> as:</p>
                    <Latex>{`$$\\lambda=\\begin{cases}
                                (y_P-y_Q)(x_P-x_Q)^{-1} \\pmod p \\enspace\\text{if } P \\neq Q\\\\
                                (3{x_P}^2+a)(2y_P)^{-1} \\pmod p \\enspace \\text{if } P =Q
                            \\end{cases}$$`}
                    </Latex>
                    <p>Then <span class="math inline"><em>x</em><sub><em>R</em></sub> = <em>λ</em><sup>2</sup> − <em>x</em><sub><em>P</em></sub> − <em>x</em><sub><em>Q</em></sub> (mod  <em>p</em>)</span> and <Latex>{`$-y_R=\lamda(x_P-x_R)-y_P \pmod p$`}</Latex></p>
                    <p>We can still conclude that <span class="math inline"><em>P</em> + <em>Q</em> =  − <em>R</em></span>, where <span class="math inline"> − <em>R</em> = (<em>x</em><sub><em>R</em></sub>,−<em>y</em><sub><em>R</em></sub>)</span>.<br />
                        <br></br><strong>Subgroup Order</strong>:</p>
                    <p>Given a point generator <span class="math inline"><em>P</em></span> we can calculate its order using the following system:</p>
                    <ol>
                        <li><p>Calculate the elliptic curve’s order <strong>N</strong> using <a href="https://en.wikipedia.org/wiki/Schoof%27s_algorithm">Schoof's algorithm</a>.</p></li>
                        <li><p>Find out all the divisors of <strong>N</strong>.</p></li>
                        <li><p>For every divisor <strong>n</strong> of <strong>N</strong>, compute <span class="math inline"><em>n</em><em>P</em></span>. The smallest <strong>n</strong> such that <strong>nP</strong><span class="math inline"> = 0</span> is the order of the subgroup.</p></li>
                    </ol>
                    <p><br />
                        For our ECC algorithms, we want subgroups with a high order. So in general we will choose an elliptic curve, calculate its order (<strong>N</strong>), choose a high divisor as the subgroup order (<strong>n</strong>) and eventually find a suitable base point. That is: we won’t choose a base point and then calculate its order, but we’ll do the opposite: we will first choose an order that looks good enough and then we will hunt for a suitable base point. How do we do that?</p>
                    <ol>
                        <li><p>Calculate the order <strong>N</strong> of the elliptic curve.</p></li>
                        <li><p>Choose the order <strong>n</strong> of the subgroup. For the algorithm to work, this number must be prime and must be a divisor of <strong>N</strong>.</p></li>
                        <li><p>Compute the cofactor <Latex>{`$\\textbf{h}=\\frac{\\textbf{N}}{n}$`}</Latex>, which is an integer by the Lagrange theorem.</p></li>
                        <li><p>Choose a random point <span class="math inline"><em>P</em></span> on the curve.</p></li>
                        <li><p>Compute <span class="math inline"><strong>G</strong> = <strong>nP</strong></span>. If <strong>G</strong> is 0, then go back to step 4. Otherwise we have found a generator of a subgroup with order <strong>n</strong> and cofactor <strong>h</strong>.</p></li>
                    </ol>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/applied_cryptography/elliptic_curve_cryptography`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/applied_cryptography/elliptic_curve_pairings`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default EllipticCurveCryptographyPart2;