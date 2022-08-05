import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import 'animate.css';
import Latex from 'react-latex';
import Button from '../../../components/Button';

function ExtendedEuclideanAlgorithm() {
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
                <h3>Extended Euclidean Algorithm</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>The basic Euclidean algorithm computes the greatest common divisor of two integers. A simple way to find the greatest common divisor is to factorize both numbers and multiply common prime factors.</p>
                    <center>
                        <Latex>{`$1092 = 294 \\times 3 + 210$`}</Latex><br></br>
                        <Latex>{`$294 = 210 \\times 1 + 84$`}</Latex><br></br>
                        <Latex>{`$210 = 84 \\times 2 + 42$`}</Latex><br></br>
                        <Latex>{`$84 = 42 \\times 2 + 0$`}</Latex><br></br>
                    </center>
                    <br></br>
                    <p>In addition to computing the greatest common divisor, the Extended Euclidean algorithm also computes integers <span class="math inline"><em>x</em></span> and <span class="math inline"><em>y</em></span> such that <span class="math inline"><em>a</em><em>x</em> + <em>b</em><em>y</em> = <em>g</em><em>c</em><em>d</em>(<em>a</em>,<em>b</em>)</span></p>
                    <br></br>
                    <p>We rewrite the expression in terms of the previous two terms:</p>
                    <br></br>
                    <center><Latex>{`$42 = 210 - 84 \\times 2$`}</Latex></center>
                    <br></br>
                    <p>We replace 84 with our previous line <Latex>{`$210 = 84 \\times 2 + 42$`}</Latex>:</p>
                    <br></br>
                    <center><Latex>{`$= 210 - (294 - 210 \\times 1) \\times 2$`}</Latex></center>
                    <center><Latex>{`$= 210 \\times 3 + 294 \\times (-2)$`}</Latex></center>
                    <br></br>
                    <p>Repeat the process:</p>
                    <br></br>
                    <center><Latex>{`$= (1092 - 294 \\times 3) \\times 3 + 294 \\times (-2)$`}</Latex></center>
                    <br></br>
                    <p>Group common terms</p>
                    <br></br>
                    <center><Latex>{`$= 1092 \\times 3 + 294 \\times (-11)$`}</Latex></center>
                    <br></br>
                    <p><span class="math inline"><em>x</em> = 3</span> and <span class="math inline"><em>y</em> =  − 11</span></p>
                    <p>When a and b are coprime x is the modular multiplicative inverse of a modulo b, and y is the modular multiplicative inverse of b modulo a.</p>

                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default ExtendedEuclideanAlgorithm;