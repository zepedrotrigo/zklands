import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';

function PublicKeyEncryption() {
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
                <h3>Public Key Encryption</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>In public key encryption, a different pair of keys is used to encrypt and decrypt information. A public key is used for encryption and a private key is used for decryption. Even if the public key is known by everyone, only the intended receiver can decode it because he alone knows the private key.</p>
                    <p>The Diffie Hellman algorithm is used in communications and relies on the use of temporary keys and in the hardness of the Discrete Logarithm Problem.</p>
                    <p>Imagine we have two parties, Alice and Bob, that want to share a secret over an insecure channel, one way they can do that is using the following algorithm:</p>
                    <ul>
                        <li><p>Pick a “large” prime number <span class="math inline"><em>p</em></span> and a generator,<span class="math inline"><em>g</em></span> , of <span class="math inline">ℤ<sub><em>p</em></sub></span> and all operations are done under <span class="math inline"><em>p</em></span> modulo.</p></li>
                        <li><p>Alice has to:</p>
                            <ul>
                                <li><p>Pick a random private number <span class="math inline"><em>x</em></span></p></li>
                                <li><p>Calculate <span class="math inline"><em>a</em> = <em>g</em><sup><em>x</em></sup></span></p></li>
                                <li><p>Send <span class="math inline"><em>a</em></span> to Bob</p></li>
                            </ul></li>
                        <li><p>Then Bob:</p>
                            <ul>
                                <li><p>Picks a random private number <span class="math inline"><em>y</em></span></p></li>
                                <li><p>Calculate <span class="math inline"><em>b</em> = <em>g</em><sup><em>y</em></sup></span></p></li>
                                <li><p>Send <span class="math inline"><em>b</em></span> to Alice</p></li>
                            </ul></li>
                        <li><p>Finally:</p>
                            <ul>
                                <li><p>Alice does <span class="math inline"><em>b</em><sup><em>x</em></sup></span></p></li>
                                <li><p>Bob does <span class="math inline"><em>a</em><sup><em>y</em></sup></span></p></li>
                            </ul></li>
                    </ul>
                    <p>This works because, in the end they both have: <span class="math inline"><em>k</em> = <em>a</em><sup><em>y</em></sup> = (<em>g</em><sup><em>x</em></sup>)<sup><em>y</em></sup> = (<em>g</em><sup><em>y</em></sup>)<sup><em>x</em></sup> = <em>b</em><sup><em>x</em></sup></span> which can be used as a shared private key.</p>

                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/applied_cryptography/digital_signatures`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/applied_cryptography/merkle_trees`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default PublicKeyEncryption;