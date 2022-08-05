import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import 'animate.css';
import Button from '../../../components/Button';

function Polynomials() {
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
                <h3>Modular Inverses</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>A polynomial is a class of algebraic expressions consisting of variables and coefficients, that involves only operations of addiction, subtraction, multiplication and division. The exponent of a polynomial must be a positive integer. Throughout this module we are only going to talk about polynomials with a single variable. These types of polynomials are a finite sum of terms of the form <span class="math inline"><em>c</em><em>x</em><sup><em>n</em></sup></span>, where <span class="math inline"><em>c</em></span> is the coefficient, so a polynomial can be denoted as <span class="math display"><em>P</em>(<em>x</em>) = <em>a</em><sub><em>n</em></sub><em>x</em><sup><em>n</em></sup> + <em>a</em><sub><em>n</em> − 1</sub><em>x</em><sup><em>n</em> − 1</sup> + … + <em>a</em><sub>1</sub><em>x</em><sup>1</sup> + <em>a</em><sub>0</sub></span> where <span class="math inline"><em>n</em></span> is the biggest number and it’s the degree of a polynomial and its coefficient is the leading coefficient.</p>
                    <p>One of the most useful theorems related to polynomials is the Fundamental Theorem of Algebra which states that <span class="math inline"><em>P</em>(<em>x</em>)</span> is a polynomial of degree <span class="math inline"><em>n</em> ≥ 1</span>, then <span class="math inline"><em>P</em>(<em>x</em>) = 0</span> has exactly <span class="math inline"><em>n</em></span> roots, including multiple and complex roots. Then it follows that if we have two different polynomials with degree <span class="math inline"><em>n</em></span> they intersect at at most <span class="math inline"><em>n</em></span> points.</p>
                    <p>Examples of polynomials are:</p>
                    <ul>
                        <li><span class="math inline"><em>x</em> + 5</span></li>
                        <li><span class="math inline"><em>x</em><sup>3</sup> + 2<em>x</em><sup>2</sup> − 3<em>x</em> + 7</span></li>
                        <li><span class="math inline"><em>x</em><sup>4</sup></span></li>
                        <li><span class="math inline"> − 2</span></li>
                    </ul>
                    <p>Something we should note it’s that if we have polynomials <span class="math inline"><em>A</em>(<em>x</em>) = <em>x</em>² + 3</span> and <span class="math inline"><em>B</em>(<em>x</em>) = <em>x</em> + 5</span>, then naturally <span class="math inline"><em>A</em>(<em>x</em>) + <em>B</em>(<em>x</em>) = <em>x</em><sup>2</sup> + <em>x</em> + 8</span>.</p>
                    <p>One of the reasons we use polynomials is the fact that polynomial equations can encode an unbounded range of information, which is useful for problem solving. Another reason is that if <span class="math inline"><em>A</em>(<em>x</em>) + <em>B</em>(<em>x</em>) = <em>C</em>(<em>x</em>)</span> holds true for any value of <span class="math inline"><em>x</em></span>, then using only one equation we are representing an infinite number of relations between numbers using only one single equation for everything.</p>
                    <p>For example, using <span class="math inline"><em>A</em>(<em>x</em>) = <em>x</em><sup>2</sup> + 3</span>, <span class="math inline"><em>B</em>(<em>x</em>) = <em>x</em> + 5</span> and <span class="math inline"><em>C</em>(<em>x</em>) = <em>x</em><sup>2</sup> + <em>x</em> + 8</span>, we already know that <span class="math inline"><em>A</em>(<em>x</em>) + <em>B</em>(<em>x</em>) = <em>C</em>(<em>x</em>)</span> holds true, then it’s also true, for example, <span class="math inline"><em>A</em>(2) + <em>B</em>(2) = <em>C</em>(2)</span> and <span class="math inline"><em>A</em>(<em>π</em>) + <em>B</em>(<em>π</em>) = <em>C</em>(<em>π</em>)</span>.</p>

                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default Polynomials;