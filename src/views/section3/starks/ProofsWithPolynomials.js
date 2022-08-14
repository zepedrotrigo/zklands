import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';

function ProofsWithPolynomials() {
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
                <h3>ZK-STARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="proofs-with-polynomials-the-stark-polynomial-iop">Proofs with polynomials (the STARK polynomial IOP)</h6>
                    <p>Following all the steps above we should end up with a commitment of (from the prover to the verifier):</p>
                    <ul>
                        <li><p>Trace Root</p></li>
                        <li><p>CP Root</p></li>
                        <li><p><span class="math inline"><em>C</em><em>P</em><sub><em>i</em></sub></span> Root for each <span class="math inline"><em>i</em></span> (step) in the <span class="math inline"><em>F</em><em>R</em><em>I</em></span> process</p></li>
                    </ul>
                    <p>Now we must convince a verifier that our commitments are done correctly. The way this is done is simple: the verifier send us <span class="math inline"><em>q</em></span> random elements and we must provide a validation data (is data that proves that each computation/ step in the process was done accordingly) for each <span class="math inline"><em>q</em></span>.</p>
                    <p>First, we need to convince our prover that the transition from the trace to the CP was done correctly.<br />
                        So if we send, <span class="math inline"><em>f</em>(<em>x</em>), <em>f</em>(<em>g</em>⋅<em>x</em>)</span> and <span class="math inline"><em>f</em>(<em>g</em><sup>2</sup>⋅<em>x</em>)</span> the prover must be able to compute <span class="math inline"><em>C</em><em>P</em><sub>0</sub>(<em>x</em>) = <em>α</em><sub>0</sub> ⋅ <em>p</em><sub>0</sub> + <em>α</em><sub>1</sub> ⋅ <em>p</em><sub>1</sub> + <em>α</em><sub>2</sub> ⋅ <em>p</em><sub>2</sub></span> and then can be convinced our computation was done right.</p>
                    <p>Secondly, we want to convince the verifier is the transition between two <span class="math inline"><em>F</em><em>R</em><em>I</em></span> steps.<br />
                        If we remember that <span class="math inline"><em>C</em><em>P</em><sub><em>i</em></sub>(<em>x</em>) = <em>g</em>(<em>x</em><sup>2</sup>) + <em>x</em><em>h</em>(<em>x</em><sup>2</sup>)</span>, then if we compute <span class="math inline"><em>C</em><em>P</em><sub><em>i</em></sub>(−<em>x</em>) = <em>g</em>(<em>x</em><sup>2</sup>) − <em>x</em><em>h</em>(<em>x</em><sup>2</sup>)</span>.<br />
                        <br></br>Therefore, for example <Latex>{`$CP_i(x)+CP_i(-x)=2g(x^2) \\Leftrightarrow \\dfrac{CP_i(x)+CP_i(-x)}{2}=g(x^2)$`}</Latex>.<br />
                        <br></br>Similarly, <Latex>{`$\\dfrac{CP_i(x)+CP_i(-x)}{2x}=h(x^2)$`}</Latex>.<br />
                        <br></br>If we remember that <span class="math inline"><em>C</em><em>P</em><sub><em>i</em> + 1</sub>(<em>x</em><sup>2</sup>) = <em>g</em>(<em>x</em><sup>2</sup>) + <em>β</em><em>h</em>(<em>x</em><sup>2</sup>)</span>, then we can write <span class="math inline"><em>C</em><em>P</em><sub><em>i</em> + 1</sub>(<em>x</em><sup>2</sup>)</span>, using only <span class="math inline"><em>C</em><em>P</em><sub><em>i</em></sub>(<em>x</em>)</span> and <span class="math inline"><em>C</em><em>P</em><sub><em>i</em></sub>(−<em>x</em>)</span>.</p>
                    <p>Now, for example, we just need to send <span class="math inline"><em>C</em><em>P</em><sub>0</sub>(<em>x</em>)</span> and <span class="math inline"><em>C</em><em>P</em><sub>0</sub>(−<em>x</em>)</span> and the prover should be able to compute and verifie <span class="math inline"><em>C</em><em>P</em><sub>1</sub>(<em>x</em><sup>2</sup>)</span>. And we if send <span class="math inline"><em>C</em><em>P</em><sub>1</sub>(−<em>x</em><sup>2</sup>)</span> the verifier must be able to compute and verifie <span class="math inline"><em>C</em><em>P</em><sub>2</sub>(<em>x</em><sup>4</sup>)</span> and so on ...</p>
                    <p>For the Decommitment phase at some specific point <span class="math inline"><em>x</em></span>, we must send, as before, <span class="math inline"><em>f</em>(<em>x</em>), <em>f</em>(<em>g</em>⋅<em>x</em>)</span> and <span class="math inline"><em>f</em>(<em>g</em><sup>2</sup>⋅<em>x</em>)</span>, but each of these must be followed by their authentication path (from the leaves to the root) in other to show that we actually commited on these elements and they are indeed the root of a long list under laying computation.<br />
                        Then, the verifier computes <span class="math inline"><em>C</em><em>P</em><sub>0</sub>(<em>x</em>)</span> and checks if it’s the same value, with the authentication path. Then we send <span class="math inline"><em>C</em><em>P</em><sub>0</sub>(−<em>x</em>)</span> and the verifier computes <span class="math inline"><em>C</em><em>P</em><sub>1</sub>(<em>x</em><sup>2</sup>)</span> and, again, checks if it’s the same value with the authentication path, that we (the prover) sent before. This process is done again and again, until the last step of <span class="math inline"><em>F</em><em>R</em><em>I</em></span>.</p>

                </h6>

                <Link to={`/`}>
                    <Button text="Finish!"></Button>
                </Link>

            </Container>
        </div>
    )
}

export default ProofsWithPolynomials;