import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function RsaEncryptionScheme() {
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
                <h3>Rsa Encryption Scheme</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>The <span class="math inline"><em>R</em><em>S</em><em>A</em></span> Encryption Scheme is a asymmetric cipher which relies heavily on concepts like modular arithmetic and number theory, if you are not familiar with those, please consider check our chapter 1 for further information. We will work under the assumption you at least have some grasping of it.</p>
                    <p>To build a RSA cipher, one needs to have <span class="math inline"><em>p</em></span> and <span class="math inline"><em>q</em></span> prime numbers, relatively big, then compute <span class="math inline"><em>n</em> = <em>p</em> ⋅ <em>q</em></span>. With <span class="math inline"><em>n</em></span> we also have <span class="math inline"><em>φ</em>(<em>n</em>) = (<em>p</em>−1)(<em>q</em>−1)</span>. Now we choose a number <span class="math inline"><em>c</em></span> that is relatively prime to <span class="math inline"><em>φ</em>(<em>n</em>)</span> that is <span class="math inline"><em>g</em><em>c</em><em>d</em>(<em>c</em>,<em>φ</em>(<em>n</em>)) = 1</span>. Using the extended euclidean algorithm we can find a number <span class="math inline"><em>d</em></span> such as <span class="math inline"><em>c</em><em>d</em> ≡ 1 (mod  <em>φ</em>(<em>n</em>))</span>, that’s possible because <span class="math inline">gcd (<em>c</em>,<em>φ</em>(<em>n</em>)) = 1</span> so we can find <span class="math inline"><em>c</em><em>d</em> + <em>x</em><em>φ</em>(<em>n</em>) = 1 ⇔ <em>c</em><em>d</em> = 1 − <em>x</em><em>φ</em>(<em>n</em>) ⇔ <em>c</em><em>d</em> = 1 + <em>y</em><em>φ</em>(<em>n</em>)</span> where <span class="math inline"> − <em>x</em> = <em>y</em></span>.<br /></p>
                    <p>Now, that we have all we need we claim that our public key are the values <span class="math inline"><em>n</em></span> and <span class="math inline"><em>c</em></span>, and our private key is <span class="math inline"><em>d</em></span>.<br /></p>
                    <p>Now imagine that Bob wants to share a encrypted message with Alice. She first creates a RSA cipher so she has the values <span class="math inline"><em>n</em>, <em>c</em></span> and <span class="math inline"><em>d</em></span>, but only shares to the world the <span class="math inline"><em>n</em></span> and <span class="math inline"><em>c</em></span>. Then Bob translates his message into a sequence of numbers that must be lower than <span class="math inline"><em>n</em></span> and breaks his message in blocks that also have lenght lower than <span class="math inline"><em>n</em></span>. If <span class="math inline"><em>W</em></span> is a block of the message that we want to translate then we compute <span class="math inline"><em>C</em> = <em>W</em><sup><em>c</em></sup></span> and send that to Alice, then if Alice want to decipher the message all she has to do is calculate <span class="math inline"><em>C</em><sup><em>d</em></sup></span> modulo <span class="math inline"><em>n</em></span>.<br /></p>
                    <p>Which works because <span class="math inline"><em>C</em><sup><em>d</em></sup> ≡ <em>W</em><sup><em>c</em><em>d</em></sup> = <em>W</em>(<em>W</em><sup><em>φ</em></sup>(<em>n</em>))<sup><em>y</em></sup> ≡ <em>W</em> (mod  <em>n</em>)</span>.<br /></p>
                    <p>The <span class="math inline"><em>R</em><em>S</em><em>A</em></span> is also used in Digital Signatures.<br /></p>
                    <p>To sign a contract <span class="math inline"><em>C</em></span>, with Bob she sends Bob the number <span class="math inline"><em>S</em></span> wich is <span class="math inline"><em>S</em> ≡ <em>C</em><sup><em>d</em></sup> (mod  <em>n</em>)</span>, then because the <span class="math inline"><em>n</em></span> and <span class="math inline"><em>c</em></span> are public, Bob can easily check if <span class="math inline"><em>S</em><sup><em>c</em></sup> ≡ <em>C</em> (mod  <em>n</em>)</span>.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/interactive_proofs/interactive_proofs`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/interactive_proofs/fiat_shamir`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default RsaEncryptionScheme;