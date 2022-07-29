import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/r1cs_example.png';

function R1cs() {
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
                    <h6 id="r1cs">R1CS</h6>
                    <p>An R1CS (rank-1 constraint system) is a sequence of groups of three vectors (a, b, c), and the solution to an R1CS is a vector s, where s must satisfy the equation <span class="math inline"><em>s</em> ⋅ <em>a</em> * <em>s</em> ⋅ <em>b</em> − <em>s</em> ⋅ <em>c</em> = 0</span>, where <span class="math inline">⋅</span> is the dot product.</p>
                    <p>Example of a certified R1CS:</p>
                    <center><img src={img1} alt="Example of a certified R1CS"></img></center>
                    <p>Now, we are going to build an <span class="math inline"><em>R</em>1<em>C</em><em>S</em></span> for our main example. For that we need to build a constraint for each of logic gate. Then, we assume that the length of each vector is equal to the total number of variables in the system (including a dummy variable <span class="math inline">∼</span> one at first index representing 1, the input variables, an  out variable, and all the intermediate variables).</p>
                    <p>So we’ll use [ one , x ,  out, sym<span>_</span>1, y, sym<span>_</span>2] as our mapping.<br />
                    </p>
                    <p><strong>First Gate</strong> x*x = sym<span>_</span>1:</p>
                    <center>
                        <pre><code>
                            ㅤㅤ~one x ~out sym_1 y,  sym_2<br></br>
                            a = [0, 1,  0,   0,   0,   0]<br></br>
                            b = [0, 1,  0,   0,   0,   0]<br></br>
                            c = [0, 0,  0,   1,   0,   0]
                        </code></pre>
                    </center>
                    <p>If the solution vector contains 3 in the 2nd position and 9 in the 4th position the check will pass. <br></br>If it contains 7 in the 2nd position and 49 in the 4th position it will also pass.<br></br>Basically given a solution vector <span class="math inline"><em>s</em> = (<em>s</em><sub>1</sub>,<em>s</em><sub>2</sub>,<em>s</em><sub>3</sub>,<em>s</em><sub>4</sub>,<em>s</em><sub>5</sub>,<em>s</em><sub>6</sub>)</span> then we have <Latex>{`$s.a * s.b - s.c=0 \\Leftrightarrow s_2 *s_2 - s_4=0$`}</Latex>, so any vector such <span class="math inline"><em>s</em><sub>2</sub><sup>2</sup> = <em>s</em><sub>4</sub></span> satisfies the constraint.</p>
                    <p>This check verifies the consistency of the inputs and outputs of the first gate.</p>
                    <p><strong>Second gate</strong> sym<span>_</span>1 * x = y:</p>
                    <center>
                        <pre><code>
                            ㅤㅤ~one x ~out sym_1  y, sym_2<br></br>
                            a = [0, 0,  0,   1,   0,   0]<br></br>
                            b = [0, 1,  0,   0,   0,   0]<br></br>
                            c = [0, 0,  0,   0,   1,   0]
                        </code></pre>
                    </center>
                    <p><strong>Third gate</strong> y + x = sym<span>_</span>2:</p>
                    <center>
                        <pre><code>
                            ㅤㅤ~one x ~out sym_1  y, sym_2<br></br>
                            a = [0, 1,  0,   0,   1,   0]<br></br>
                            b = [1, 0,  0,   0,   0,   0]<br></br>
                            c = [0, 0,  0,   0,   0,   1]
                        </code></pre>
                    </center>
                    <p>In this case, we are simply doing an addition check because the first element of the solution is always one we are just checking if <span class="math inline"><em>s</em><sub>2</sub> + <em>s</em><sub>5</sub> = <em>s</em><sub>6</sub></span> which is <span class="math inline"><em>y</em> + <em>x</em>=</span>sym<span>_</span>2.</p>
                    <p><strong>Fourth gate</strong> sym<span>_</span>2 + 5 =  out:</p>
                    <center>
                        <pre><code>
                            ㅤㅤ~one x ~out sym_1  y, sym_2<br></br>
                            a = [5, 0,  0,   0,   0,   1]<br></br>
                            b = [1, 0,  0,   0,   0,   0]<br></br>
                            c = [0, 0,  1,   0,   0,   0]
                        </code></pre>
                    </center>
                    <p>To find our witness, we simply need to replace all the variables with its corresponding values using the fact that we know that <span class="math inline"><em>x</em> = 3</span> is the solution to the initial problem. So using our algebraic circuit we start by assigning <span class="math inline"><em>x</em> = 3</span> and then compute all the others variables.<br />
                        We end up with:</p>
                    <center><p><span class="math display"><em>s</em> = [1,3,35,9,27,30]</span></p></center>
                    <p>Our <span class="math inline"><em>R</em>1<em>C</em><em>S</em></span> put together is:</p>
                    <center>
                        <pre><code>
                            Aㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<br></br>
                                [0, 1, 0, 0, 0, 0]<br></br>
                                [0, 0, 0, 1, 0, 0]<br></br>
                                [0, 1, 0, 0, 1, 0]<br></br>
                                [5, 0, 0, 0, 0, 1]<br></br>

                            Bㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<br></br>
                                [0, 1, 0, 0, 0, 0]<br></br>
                                [0, 1, 0, 0, 0, 0]<br></br>
                                [1, 0, 0, 0, 0, 0]<br></br>
                                [1, 0, 0, 0, 0, 0]<br></br>

                            Cㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ<br></br>
                                [0, 0, 0, 1, 0, 0]<br></br>
                                [0, 0, 0, 0, 1, 0]<br></br>
                                [0, 0, 0, 0, 0, 1]<br></br>
                                [0, 0, 1, 0, 0, 0]
                        </code></pre>
                    </center>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/zk_snarks/algebraic_circuits`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_snarks/qap`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default R1cs;