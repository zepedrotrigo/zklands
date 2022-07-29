import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/QAP.png'

function Qap() {
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
                <h3>ZK-SNARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 class="title" id="qap">QAP</h6>
                    <p>Now that we have our <span class="math inline"><em>R</em>1<em>C</em><em>S</em></span>, our aim is to convert it into a Quadractic Arithmetic Program form, which converts our four groups of three vectors of length six into six groups of three degree-3 polynomials, that’s because we have 4 constraints. If we evaluate to polynomials at for example <span class="math inline">1</span> we want to obtain our first set of vector, that is our first logic gate. To find such polynomial we can use Lagrange Interpolation, which you should be familiar with from our section - insert here. The way that works is that for each <span class="math inline"><em>x</em></span> coordinate, we create a polynomial that has the desired <span class="math inline"><em>y</em></span> coordinate at that <span class="math inline"><em>x</em></span> coordinate and a <span class="math inline"><em>y</em></span> coordinate of 0 at all the other <span class="math inline"><em>x</em></span> coordinates we are interested in, and then to get the final result we add all of the polynomials together.<br />
                        <br></br>Here, since our example is quite simple we don’t have many constraints however in larger problems we do, so using Lagrange Interpolation becomes a problem, since it’s slow, so, to overcome that, we use fast Fourier transform algorithms which is a crucial optimization, since, for example, functions that get used in zk-SNARKs in practice often have many thousands of gates.<br />
                        <br></br>To transform our <span class="math inline"><em>R</em>1<em>C</em><em>S</em></span>, what we do is take the first value out of every <span class="math inline"><em>a</em></span> vector, then use Lagrange interpolation to make a polynomial out of that, such that, for example evaluating the polynomial at <span class="math inline">1</span> gets you first value of the first vector, generally evaluating the polynomal at <span class="math inline"><em>k</em></span> gets you the first value of the <span class="math inline"><em>k</em></span>th vector. Then we repeat this process for the first value of every <span class="math inline"><em>b</em></span> and <span class="math inline"><em>c</em></span> vector, then repeat all the process for the second value and so on.<br />
                        <br></br>Let’s for example find the first polynomial. We take the first value of every <span class="math inline"><em>a</em></span> vector and pair it with the corresponding number of the vector, by doing so we end up with: <span class="math inline">(1,0)</span>, <span class="math inline">(2,0)</span>, <span class="math inline">(3,0)</span> and <span class="math inline">(4,5)</span>. That is, the first constraint as a <span class="math inline">0</span> in the first value, the second constraint has a <span class="math inline">0</span> in the first value, ..., the fourth constraint has a <span class="math inline">5</span> in the first value. Then by using interpolation we want a polynomial such that if we evaluate its value at <span class="math inline">1</span> it gives us <span class="math inline">0</span> at <span class="math inline">2</span> it give us <span class="math inline">0</span> , ... , at <span class="math inline">4</span> it give us <span class="math inline">5</span>.</p>
                    <p>Such polynomial is :</p>
                    <center><Latex>{`$$\\dfrac{5(x - 1)(x - 2)(x - 3)}{(4 - 1)(4 - 2)(4 - 3)}=\\dfrac{5}{6}x^3-5x^2+\\dfrac{55}{6}x-5$$`}</Latex></center><br></br>
                    <p>By doing this process for the remaining of the values we end up with something like this:</p>

                    <center>
                        <pre><code>
                            A polynomialsㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<br></br>
                            [-5.0, 9.166, -5.0, 0.833]<br></br>
                            [8.0, -11.333, 5.0, -0.666]<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            [-6.0, 9.5, -4.0, 0.5]<br></br>
                            [4.0, -7.0, 3.5, -0.5]<br></br>
                            [-1.0, 1.833, -1.0, 0.166]<br></br>
                            <br></br>
                            B polynomialsㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<br></br>
                            [3.0, -5.166, 2.5, -0.333]<br></br>
                            [-2.0, 5.166, -2.5, 0.333]<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            <br></br>
                            C polynomialsㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            [0.0, 0.0, 0.0, 0.0]<br></br>
                            [-1.0, 1.833, -1.0, 0.166]<br></br>
                            [4.0, -4.333, 1.5, -0.166]<br></br>
                            [-6.0, 9.5, -4.0, 0.5]<br></br>
                            [4.0, -7.0, 3.5, -0.5]<br></br>
                        </code></pre>
                    </center>

                    <p>Coefficients are in ascending order, so the first polynomial above is actually <span class="math inline">0.833<em>x</em><sup>3</sup>—5<em>x</em><sup>2</sup> + 9.166<em>x</em> − 5</span>.</p>
                    <p>This whole process give us an advantage because now we can check all of the constraints at the same time by doing the dot product check on the polynomials.</p>
                    <center><img src={img1} alt="QAP"></img></center>
                    <p>Because in this case the dot product check is a series of additions and multiplications of polynomials, the result is itself going to be a polynomial. Since, this we build this polynomial starting from our <span class="math inline"><em>R</em>1<em>C</em><em>S</em></span>, the constraints must hold true, which in terms of our polynomial means that if we evaluate the polynomial at every <span class="math inline"><em>x</em></span> coordinate that we used above to represent a logic gate we must obtain zero and that means that all of the checks pass, if at some <span class="math inline"><em>x</em></span> we don’t have a zero, then that means the values going in and out of logic gates are inconsistent.<br />
                        <br></br>To check correctness, we don’t actually evaluate the polynomial <span class="math inline"><em>T</em> = <em>s</em> ⋅ <em>A</em> * <em>s</em> ⋅ <em>B</em> − <em>s</em> ⋅ <em>C</em></span> at every point corresponding to a gate; instead, we divide <span class="math inline"><em>T</em></span> by another polynomial, <span class="math inline"><em>Z</em></span>, defined as <span class="math inline"><em>Z</em> = (<em>x</em>−1) * (<em>x</em>−2) * (<em>x</em>−3) * (<em>x</em>−4)</span>, that is the simplest polynomial that is zero at every <span class="math inline"><em>x</em></span> coordinate we want to check - all points that correspond a logic gate. Then we check if <span class="math inline"><em>Z</em></span> evenly divides <span class="math inline"><em>T</em></span> - that is, the division <span class="math inline"><em>T</em>/<em>Z</em></span> leaves no remainder. It is an elementary fact of algebra (check our chapter) that any polynomial that is equal to zero at all of these points has to be a multiple of this minimal polynomial, and if a polynomial is a multiple of <span class="math inline"><em>Z</em></span> then its evaluation at any of those points will be zero; this equivalence makes our job much easier.</p>
                    <p>Now for our example:</p>
                    
                    <ul>
                        <li>Find <span class="math inline"><em>s</em> ⋅ <em>A</em></span>, <span class="math inline"><em>s</em> ⋅ <em>B</em></span> and <span class="math inline"><em>s</em> ⋅ <em>C</em></span></li>
                        <li>Compute <Latex>{`$T = s.A*s.B-s.C$`}</Latex></li>
                        <li>Compute <Latex>{`$Z=(x-1)*(x-2)*(x-3)*(x-4)$`}</Latex></li>
                        <li>Check if <span class="math inline"><em>T</em>/<em>Z</em></span> has no remainder</li>
                    </ul>
                    <p>Possible challenge: "Output the coefficient of the leading term of the final polynomial"</p>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/zk_snarks/r1cs`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_snarks/linear_pcp`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Qap;