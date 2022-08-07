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
            <Link to={`/zklands`} style={{ textDecoration: "none" }}>
                <Container extClass="container home no-anim">
                    <h3>ZK Lands</h3>
                    <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
                </Container>
            </Link>
            <Container extClass="container  bg-padding no-anim">
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
                    <p>Unlike traditional payment methods such as credit cards where banks and payment providers have access to your private data to conduct transactions, cryptocurrencies who implement zero knowledge protocols like Zcash, Monero and Tornado Cash enable private, anonymous, peer-to-peer transactions by validating said transactions without accessing the transaction’s details.<br />
                        <br></br>Although all cryptocurrencies stated above provide private peer-to-peer transactions, most cryptocurrencies like Bitcoin and Ethereum publicly share the details of all transactions processed in their blockchain, like the source and destination addresses of a specific transaction, and the amount of currency transfered between the two parties. With this knowledge, user identities can easily be associated to real-world identities by linking their wallet addresses to any popular cryptocurrency exchange which requires them to submit personal information like their ID document, bank account details, etc. User identities are only pseudonymous, they can easily be traced back by linking blockchain transactions that eventually end up in a centralized exchange in order to cash out.<br />
                        <br></br>Zcash, Monero and Tornado Cash all use zero-knowledge proofs to obfuscate transaction details and guarantee financial privacy. However, since this technology is not a standard on all public blockchains, they are all associated with ilegal activity. To overcome this, privacy has to become a standard requirement on all public blockchains.<br />
                        <br></br>"Privacy is necessary for ensuring freedom on the internet. When your transactions are being watched — or when your transaction history is available to be known — a person isn’t free to make their own decisions. With other digital currencies, bad actors are able to match people to their balances and details about parties involved, amounts and trends." - ZCash<br />
                        <br></br>Zero knowledge can also be applied to communications by guaranteeing end-to-end encryption and having a way for clients to verify that cryptographic protection is working properly at that moment. Zero knowledge protocols ensure that no data such as private keys, passwords, files, or any other sensitive data ever gets sent to the server in an unencrympted form.</p>
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