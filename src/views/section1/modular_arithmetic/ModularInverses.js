import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import 'animate.css';
import Latex from 'react-latex';
import Button from '../../../components/Button';

function ModularInverses() {
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
                    <p>Given a (commutative) ring <span class="math inline"><em>A</em></span> and elements <span class="math inline"><em>a</em>, <em>b</em>, <em>m</em> ∈ <em>A</em></span>, we denote <span class="math inline"><em>a</em> ≡ <em>b</em> (<em>m</em><em>o</em><em>d</em> <em>m</em>)</span> to say that <span class="math inline"><em>m</em>|(<em>a</em>−<em>b</em>)</span></p>
                    <p>Remark: For some <span class="math inline"><em>t</em> ∈ <em>A</em></span> we have:</p>
                    <p><center><span class="math display"><em>a</em> ≡ <em>b</em> (<em>m</em><em>o</em><em>d</em> <em>m</em>) ⇔ <em>m</em>|(<em>a</em>−<em>b</em>) ⇔ <em>a</em> − <em>b</em> = <em>m</em><em>t</em> ⇔ <em>a</em> = <em>b</em> + <em>m</em><em>t</em></span></center><br /> <br></br>
                        In any (commutative) ring A, if <span class="math inline"><em>a</em> ≡ <em>c</em> (mod  <em>m</em>) ∧ <em>b</em> ≡ <em>d</em> (mod  <em>m</em>)</span> then:</p>
                    <ul>
                        <li><p><span class="math inline"><em>a</em> + <em>b</em> ≡ <em>c</em> + <em>d</em> (<em>m</em><em>o</em><em>d</em> <em>m</em>)</span></p></li>
                        <li><p><span class="math inline"><em>a</em><em>b</em> ≡ <em>c</em><em>d</em> (<em>m</em><em>o</em><em>d</em> <em>m</em>)</span></p></li>
                    </ul>
                    <p>This relation is an equivalence relation.</p>
                    <p>Working with <span class="math inline"><em>A</em> = ℤ<sub><em>n</em></sub></span> we can define <Latex>{`$\\mathbb{Z}_n=\\{0,1,\\dots, n-1\\}$`}</Latex> as the ring of the integers modulo <span class="math inline"><em>n</em></span> and we can simply denote <span class="math inline"><em>a</em> ≡ <em>b</em></span> as <span class="math inline"><em>a</em> = <em>b</em></span> under the assumption we are working under this ring.</p>
                    <p>Remark: <span class="math inline">ℤ<sub><em>n</em></sub> = ℤ/<em>n</em>ℤ</span> where <span class="math inline"><em>n</em>ℤ</span> is an ideal.<br /><br></br>
                        One element <span class="math inline"><em>u</em></span> of a commutative ring is a unit when <span class="math inline"><em>u</em>|1</span> which means that there is a <span class="math inline"><em>v</em></span> in <span class="math inline"><em>A</em></span> that <span class="math inline"><em>u</em><em>v</em> = 1</span>.<br />
                        The units set of <span class="math inline"><em>A</em></span> is denoted as <span class="math inline"><em>A</em><sup>*</sup></span>.</p>
                    <p>This concept is useful to find the modular inverses of a number under a ring modulo <span class="math inline"><em>n</em></span>. Basically given a certain <span class="math inline"><em>c</em></span> we want to find <span class="math inline"><em>d</em></span> that <span class="math inline"><em>c</em><em>d</em> = 1</span>, then by definition <span class="math inline"><em>c</em><em>d</em> = 1 + <em>k</em><em>n</em> ⇔ <em>c</em><em>d</em> − <em>k</em><em>n</em> = 1</span>. This is easy to find using the extended euclidean algorithm.</p>
                    <p>Challenge: Find the modular inverse of 5 in <span class="math inline"><em>Z</em><sub>11</sub></span> – but with big numbers.</p>
                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default ModularInverses;