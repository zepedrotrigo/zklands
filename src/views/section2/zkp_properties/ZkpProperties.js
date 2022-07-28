import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';

function ZkpProperties() {
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
                <h3>ZKP Properties</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Zero-knowledge proofs were first introduced by Shafi Goldwasser, Silvio Micali and Charles Rackoff, in 1989. In simple terms, a Zero-Knowledge proof is a method by which one party (the prover) can prove to another party (the verifier) that some computation has a particular output or some information is true, while keeping some of the inputs hidden and avoid conveying any additional information apart from the fact that the statement is indeed true.</p>
                    <p>This concept is something groundbreaking, because, for example, let’s say we want to play a certain game however, for that we need to verify that we are over 18, but we don’t really want to reveal any additional information, like our name or actual age, that’s possible using a zero-knowledge proof to prove we are over a certain age without exactly telling more information.</p>
                    <p>There are some properties that every zero-knowledge proof must satisfy:</p>
                    <ul>
                        <li><p>Completeness: meaning that if some information is true, the verifier must be convinced by the prover if they both follow a valid protocol;</p></li>
                        <li><p>Soundness: the prover can only convince the verifier if the statement is true or more specifically, if the statement is false then there is a really low probability that a cheating prover can convince a verifier;</p></li>
                        <li><p>Zero-knowledge: if the statement is true, no verifier learns anything other than the fact that the statement is true.</p></li>
                    </ul>
                    <p>For practical examples, we highly recommend <a href="https://youtu.be/fOGdb1CTu5c">this video</a>.</p>

                </h6>

                <Link to={`/zklands`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default ZkpProperties;