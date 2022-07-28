import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function Theorems() {
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
                <h3>Fermat's little theorem and Euler's theorem</h3>
                <h6 className='v2 top-spacing-bg justify'>
                <p><strong>Femart's little Theorem</strong></p>

                    <p>Let <span class="math inline"><em>p</em></span> be a prime and <span class="math inline"><em>a</em> ∈ ℤ</span> such that <span class="math inline"><em>p</em></span> does not divide <span class="math inline"><em>p</em></span>. Then:</p>
                    <p><center><span class="math display"><em>a</em><sup><em>p</em> − 1</sup> ≡  mod  <em>p</em></span></center></p>
                    <p><strong>Euler’s Theorem</strong></p>
                    <p>Let <span class="math inline"><em>m</em></span> be any Natural and <span class="math inline"><em>a</em> ∈ ℤ</span> such <span class="math inline">mdc(a,m)=1</span>. Then:</p>
                    <p><center><span class="math display"><em>a</em><sup><em>φ</em>(<em>m</em>)</sup> ≡ 1 mod  <em>m</em></span></center></p>
                    <p>Where <span class="math inline"><em>φ</em>(<em>m</em>)</span> the Euler function which computes the number of numbers that are relative prime with <span class="math inline"><em>m</em></span>.</p>

                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/zklands`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/number_theory/quadratic_residues`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Theorems;