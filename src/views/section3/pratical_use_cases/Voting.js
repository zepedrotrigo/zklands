import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';

function Voting() {
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
                <h3>Voting</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Voting is an essential part of every democracy. Therefore, it is crucial that trust in the democratic election process is assured. Zero knowledge protocols aim to increase transparency and build trust in the electoral process by using blockchain technology to allow for the verification of data without revealing the voter’s identity.<br />
                        <br></br>This way, eligible voters can prove their right to vote without revealing their identity, making the voting process completely anonymous. Moreover, zero knowledge proofs let voters request a verifiable proof that their vote was included in the results reported by the entity responsible for the voting process.<br />
                        <br></br>Also, by recording votes on a public blockchain, a trusted third party is no longer required to verify the results of the voting process and any sort of censorship is eliminated. The voting results can be auditable by the electoral body even if they are not directly publicly visible on the blockchain.<br />
                        <br></br>Protocols like <a href="https://minaprotocol.com/">Mina</a> offer verifying vote counts as a future use case for zk-SNARKs to increase transparency and build trust in the electoral process.</p>
                </h6>

                <Link to={`/`}>
                    <Button text="Finish!"></Button>
                </Link>
            </Container>
        </div>
    )
}

export default Voting;