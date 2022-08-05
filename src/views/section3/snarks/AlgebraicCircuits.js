import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';

function AlgebraicCircuits() {
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
                <h3>ZK-SNARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 class="title" id="computation">Computation</h6>
                    <p>zk-SNARKs cannot be directly applied to a computational problem. The problem needs to be converted to a QAP (quadratic arithmetic program) first, which is something highly non-trivial. Along with the process for converting the code of a function into a QAP is created a corresponding solution, often called a "witness".<br />
                    </p>
                    <p>In order to give you a grasp of this process we will chose a simple example: proving that you know the solution <span class="math inline">(<em>x</em>=3)</span> to the equation <span class="math inline"><em>x</em><sup>3</sup> + <em>x</em> + 5 = 35</span>.<br />
                    </p>
                    <p>Consider the following function:</p>
                    <div class="sourceCode" id="cb1" data-language="Python"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabIndex="-1"></a><span class="kw">def</span> qeval(x):</span><br></br>
                        <span id="cb1-2"><a href="#cb1-2" aria-hidden="true" tabIndex="-1"></a>        y <span class="op">=</span> x<span class="op">**</span><span class="dv">3</span></span><br></br>
                        <span id="cb1-3"><a href="#cb1-3" aria-hidden="true" tabIndex="-1"></a>        <span class="cf">return</span> x <span class="op">+</span> y <span class="op">+</span> <span class="dv">5</span></span></code></pre></div><br></br>
                    <h6 class="title" id="algebraic-circuits">Algebraic Circuits</h6>
                    <p>To convert this function into an Algebraic circuit, we take the original code and convert it into a sequence of statements that only use the following arithmetic and assignment operators: <span class="math inline">+,−,*,/, =</span> and can only be the form <span class="math inline"><em>x</em> = <em>y</em></span> or <span class="math inline"><em>x</em> = <em>y</em> (<em>o</em><em>p</em>) <em>z</em></span> where <span class="math inline">(<em>o</em><em>p</em>)</span> is one of the assigned operators:</p>
                    <center>
                        <pre><code>
                            sym_1 = x * x<br></br>
                            y = sym_1 * x<br></br>
                            sym_2 = y + x<br></br>
                            ~out = sym_2 + 5
                        </code></pre>
                    </center>
                    <p>As you can see, this code is equivalent to our previous function. The resulting statements closely resemble logic gates in a circuit.</p><br></br>
                    <p><strong>Challenge:</strong></p>
                    <p>For <span class="math inline"><em>x</em><sup>4</sup> + <em>x</em><sup>3</sup> + 3<em>x</em> + 5</span> complete the circuit:</p>
                    <center>
                        <pre><code>
                            sym_1 = x * x<br></br>
                            y = sym_1 * __<br></br>
                            sym_2 = __ * x<br></br>
                            sym_3 = 3* __<br></br>
                            sym_4= sym_2 +y<br></br>
                            sym_5= sym_4 + __<br></br>
                            ~out = sym_5 + 5
                        </code></pre>
                    </center>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/zklands`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_snarks/r1cs`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default AlgebraicCircuits;