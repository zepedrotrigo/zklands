import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';

function GroupsAndFields() {
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
                <h3>Groups And Fields</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p><strong>Groups</strong></p>
                    <p>A set <span class="math inline"><em>G</em></span> with a binary operation <span class="math inline"> ⋅  : <em>G</em> × <em>G</em> → <em>G</em></span> is a group if it has the following properties:</p>
                    <ul>
                        <li><p>Closure: if <span class="math inline"><em>a</em></span> and <span class="math inline"><em>b</em></span> are members of <span class="math inline"><em>G</em></span> then <span class="math inline"><em>a</em> ⋅ <em>b</em></span> is a member <span class="math inline"><em>G</em></span>.</p></li>
                        <li><p>Associativity: For all a,b,c in G, <span class="math inline">(<em>a</em>⋅<em>b</em>) ⋅ <em>c</em> = <em>a</em> ⋅ (<em>b</em>⋅<em>c</em>)</span>.</p></li>
                        <li><p>As an identity: There is an element e such <span class="math inline"><em>a</em> ⋅ <em>e</em> = <em>e</em> ⋅ <em>a</em> = <em>a</em></span>, for all <span class="math inline"><em>a</em></span> in <span class="math inline"><em>G</em></span>.</p></li>
                        <li><p>Every element has an inverse: For all elements <span class="math inline"><em>a</em></span> of <span class="math inline"><em>G</em></span>, there is an element <span class="math inline"><em>b</em></span> such <span class="math inline"><em>a</em> ⋅ <em>b</em> = <em>e</em></span>.</p></li>
                    </ul>
                    <p>If the operation is also commutative, meaning <span class="math inline"><em>a</em> ⋅ <em>b</em> = <em>b</em> ⋅ <em>a</em></span>, the group is called Abelian. Usually, if we take <span class="math inline"><em>G</em> = ℤ</span>, our binary operation is the usual addition <span class="math inline">+</span>.<br />
                        <br></br>One should note that:</p>
                    <ul>
                        <li><p>The identity of a group is unique</p></li>
                        <li><p>The inverse of a element is unique<br />
                        </p></li>
                    </ul>
                    <p>A subgroup of a group <span class="math inline"><em>G</em></span> is a subset of <span class="math inline"><em>G</em></span> which is a group under the same binary operation.<br />
                        <br></br>A finite group is a group in which the set of members belonging to the group is finite, examples of such are permutation groups and cyclic groups. A cyclic group is a group <span class="math inline"><em>G</em></span> such that there exists a element <span class="math inline"><em>x</em></span> such <span class="math inline"><em>G</em> = ⟨<em>x</em>⟩</span>, which means that <span class="math inline"><em>x</em></span> is a generator of <span class="math inline"><em>G</em></span>, the smallest subgroup containing <span class="math inline"><em>x</em></span> is <span class="math inline"><em>G</em></span>, and all elements of <span class="math inline"><em>G</em></span> can be obtain trough <span class="math inline"><em>x</em></span>.<br />
                        <br></br>The Lagrange Theorem states that for any finite group <span class="math inline"><em>G</em></span>, the order (number of elements) of every subgroup <span class="math inline"><em>H</em></span> of <span class="math inline"><em>G</em></span> divides the order of <span class="math inline"><em>G</em></span>.</p>
                    <p><strong>Fields</strong></p>
                    <p>A set <span class="math inline"><em>F</em></span> with two binary operations <span class="math inline">+,⋅</span> is a field if it has the following properties:</p>
                    <ul>
                        <li><p><span class="math inline"><em>F</em>, +</span> is a commutative group with identity 0</p></li>
                        <li><p>F without 0 , <span class="math inline">⋅</span> is a commutative group with identity 1</p></li>
                        <li><p>Distributivity: <span class="math inline"><em>a</em> ⋅ (<em>b</em>+<em>c</em>) = (<em>a</em>⋅<em>b</em>) + (<em>a</em>⋅<em>c</em>)</span></p></li>
                    </ul>
                    <p>A finite field is a set with a finite number of elements, one of the most used is the finite field of the integer modulo a prime <span class="math inline"><em>p</em></span>, it is usually denoted as <span class="math inline">𝔽<sub><em>p</em></sub></span>.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/algebra_and_discrete_maths/polynomials`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default GroupsAndFields;