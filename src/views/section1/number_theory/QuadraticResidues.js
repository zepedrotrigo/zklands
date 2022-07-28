import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function QuadraticResidues() {
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
                <h3>Quadratic Residues</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>An element <span class="math inline"><em>a</em> ∈ ℤ<sub><em>m</em></sub><sup>*</sup></span> is Quadratic Residue modulo <span class="math inline"><em>m</em></span> if <span class="math inline"><em>a</em> = <em>x</em><sup>2</sup></span> for some <span class="math inline"><em>x</em> ∈ ℤ<sub><em>m</em></sub><sup>*</sup></span>. If there is no such solution, we say that <span class="math inline"><em>a</em></span> in a Quadratic Non-Residue modulo <span class="math inline"><em>m</em></span>.<br />
                        <br></br>If <span class="math inline"><em>a</em></span> is a Quadratic Residue then there is an <span class="math inline"><em>x</em></span> such <span class="math inline"><em>a</em> = <em>x</em><sup>2</sup></span>, but we also have that: <span class="math inline"><em>a</em> = (−<em>x</em>)<sup>2</sup></span>. So for every Quadratic Residue we have two solutions.<br />
                        <br></br>If <span class="math inline"><em>p</em></span> is some odd prime, then modulo <span class="math inline"><em>p</em></span> there are as many Quadratic Residues as Quadratic Non-Residues, i.e., the number of Quadratic residues modulo <span class="math inline"><em>p</em></span> is <Latex>{`$\\frac{p - 1}{2}$`}</Latex>.<br />
                        <br></br>Assuming that <span class="math inline"><em>p</em> ≠ 2</span> is prime and that <span class="math inline"><em>a</em> ∈ ℤ<sub><em>p</em></sub><sup>*</sup></span>, then <span class="math inline"><em>a</em></span> is a Quadratic Residue modulo <span class="math inline"><em>p</em></span> if and only if <Latex>{`$a^{\frac{p - 1}{2}} \equiv 1 \ (\text{mod} \enspace p)$`}</Latex>.<br />
                        <br></br><strong>Legendre Symbol</strong></p>
                    <p>Given an odd prime number <span class="math inline"><em>p</em></span> we define the Legendre Symbol as:</p>
                    <p><Latex>{`$$\\left( \\frac{a}{p} \\right) = \\begin{cases}
                                    1 \\enspace \\text{if } a \\text{ is a Quadratic Residue modulo p}\\\\
                                    0 \\enspace \\text{if } \\enspace p|a \\\\
                                    -1 \\enspace \\text{if } a \\text{ is a Quadratic Non-Residue modulo p}\\\\
                                \\end{cases}$$`}
                    </Latex><br /><br></br>
                        Some basic properties:</p>
                    <ul>
                        <li><p>Quadratic Residue * Quadratic Residue = Quadratic Residue</p></li>
                        <li><p>Quadratic Residue * Quadratic Non-residue = Quadratic Non-residue</p></li>
                        <li><p>Quadratic Non-residue * Quadratic Non-residue = Quadratic Residue</p></li>
                    </ul>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/number_theory/theorems`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/number_theory/extended_euclidean_algorithm`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default QuadraticResidues;