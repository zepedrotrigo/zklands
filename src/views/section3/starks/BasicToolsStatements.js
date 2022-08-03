import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/starks_paths.png'

function BasicToolsStatements() {
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
                    <h6 id="basic-tools-statements">Basic tools, Statements </h6>
                    <p><strong>Finite Fields</strong></p>
                    <p>The use of finite fields is a common practice in cryptography protocols, to build STARKs we need finite fields with a specific propriety: it needs to contain a substructure of order <span class="math inline">2<em>k</em></span> for some sufficiently large k. Therefore we use prime fields where <span class="math inline"><em>p</em></span>, is prime, and has the form <span class="math inline"><em>p</em> = <em>f</em> * 2<em>k</em> + 1</span>.</p>
                    <p><strong>Polynomials</strong></p>
                    <p>For STARKs we need polynomial evaluation on a domain of values, rather in a single point. Performance is not a concern at this point so the following implementation follows a straightforward iterative method.</p>
                    <p>Imagine we want to prove to someone a certain statement ... For that we need to create an input then interpolate its value and extend the domain. The input is also known as trace, we can think about it as the information we have present which can be a set of values <span class="math inline"><em>y</em><sub>0</sub>, <em>y</em><sub>1</sub>, …, <em>y</em><sub><em>k</em></sub></span>. Then, from our finite field we pick a random generator <span class="math inline"><em>g</em></span> and we create some pairs such as <span class="math inline">(1,0), (<em>g</em>,<em>y</em><sub>1</sub>), …(<em>g</em><sup><em>k</em></sup>,<em>y</em><sub><em>k</em></sub>)</span>. Then we interpolate a polynomial that passes through these points. Afterwards we simply have to choose a larger evaluate domain for this polynomial by using a generator and cosets and we create a merkle tree in which the leafs are the values of the polynomial in this domain, finally we commit the hash of the root.<br />
                    </p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/zk_starks/intro`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_starks/polynomial_constraints`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default BasicToolsStatements;