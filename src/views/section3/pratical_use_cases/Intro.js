import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function Intro() {
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
                <h3>Introduction</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="scaling-on-layer-2-with-zk-rollups">Scaling on Layer 2 with ZK-Rollups</h6>
                    <p>The three fundamental properties of a blockchain are decentralization, security and scalability. The blockchain trilemma states that you must choose 2 out of 3 properties and sacrifice the remaining one. ZK-rollups, like zkSync and Starknet, aim to solve this trilemma by dealing with scalability at Layer 2 while the Layer 1 chain deals with security and privacy concerns.<br />
                        <br></br>The term Layer 1 refers to a foundational, base blockchain like the Bitcoin and Ethereum blockchains while Layer 2 refers to a separate blockchain that builds on top of the base blockchain. L2 blockchains improve scalability by bundling hundreds of transactions off-chain into one and generating a validity proof (in the form of a SNARK or STARK) that is posted to layer 1 where consensus is reached. As transaction data is included in layer 1 blocks, this allows rollups to be secured by L1 blockchain’s native security mechanisms.<br />
                        <br></br>By removing the transactional load from layer 1, it becomes less congested and more scalable. The price per individual transaction also decreases since we are effectively processing one bundled transaction that contains hundreds, instead of individually processing hundreds of transactions. Increasing the network speed, cost and throughput is crucial to incentivize the mass adoption of cryptocurrency as a standard form of payment.</p>
                    <br></br>
                    <h6 id="tax-compliance">Tax compliance</h6>
                    <p>As we know, everything on the blockchain is public and anyone can acess everyone’s transaction history by simply knowing their wallet address. This poses a legitimate privacy concern to users. Protocols like Zcash, Monero or Tornado Cash solve this privacy concern by using zero-knowledge proofs to keep transactions private and break the on-chain link between a source and a destination address. However, this paradigm presents a new problem: Tax compliance.<br />
                        <br></br>User privacy and anonymity should never come at the cost of non-compliance. Instead, the user should be able to specify which entities are able to view his transaction information, since the right of privacy lies in the ability to have control over what information we provide and to whom we provide it. For this purpose, zero knowledge proofs can be used to generate a cryptographically verified proof of transactional history, letting users prove the origin of their funds to others.</p>
                    <br></br>
                    <h6 id="privacy-in-payments-and-communication">Privacy in payments and communication</h6>
                    <p>NOT DONE YET https://tornado-cash.medium.com/introducing-private-transactions-on-ethereum-now-69fb059a14a1</p>

                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/zklands`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/use_cases/identity_why`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Intro;