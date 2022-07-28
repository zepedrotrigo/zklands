import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function ChineseRemainderTheorem() {
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
                <h3>Chinese Remainder Theorem</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Given <span class="math inline"><em>m</em><sub>1</sub>, <em>m</em><sub>2</sub>, …, <em>m</em><sub><em>k</em></sub> ∈ ℕ</span>, pairwise coprimes and an arbitrary integers <span class="math inline"><em>a</em><sub>1</sub>, <em>a</em><sub>2</sub>, …, <em>a</em><sub><em>k</em></sub></span>, then following system of linear congruences has one and only one solution modulo <span class="math inline"><em>m</em> = <em>m</em><sub>1</sub><em>m</em><sub>2</sub>…<em>m</em><sub><em>k</em></sub></span>:</p>
                    <p><center><span class="math display"><em>x</em> ≡ <em>a</em><sub>1</sub> (<em>m</em><em>o</em><em>d</em> <em>m</em><sub>1</sub>)</span><br></br> <span class="math display"><em>x</em> ≡ <em>a</em><sub>2</sub> (<em>m</em><em>o</em><em>d</em> <em>m</em><sub>2</sub>)</span><br></br> <span class="math display">…</span><br></br> <span class="math display"><em>x</em> ≡ <em>a</em><sub><em>k</em></sub> (<em>m</em><em>o</em><em>d</em> <em>m</em><sub><em>k</em></sub>)</span></center></p>
                    <p>Let <Latex>{`$\\hat{m_i}=\\dfrac{m}{m_i}$`}</Latex>, for <span class="math inline"><em>i</em> = 1, …, <em>k</em></span>. Set <span class="math inline"><em>u</em><sub><em>i</em></sub></span> has the inverse of <Latex>{`$\\hat{m_i}$`}</Latex> modulo <span class="math inline"><em>m</em><sub><em>i</em></sub></span> then the solution is <br></br><br></br><center><Latex>{`$$x=a_1u_1\\hat{m_1}+\\dots + a_ku_k\\hat{m_k}$$`}</Latex></center><br></br></p>
                    <p>In cryptography, we commonly use the Chinese Remainder Theorem to help us reduce a problem of very large integers into a set of several, easier problems.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/zklands`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/modular_arithmetic/modular_inverses`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default ChineseRemainderTheorem;