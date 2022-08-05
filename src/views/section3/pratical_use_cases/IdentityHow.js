import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function IdentityHow() {
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
                <h3>Identity: How</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>ZK Identity tools must enable participants to make claims about identity and reputation. These claims rely on cryptographic concepts like digital signature verification, key generation, hash functions and encryption. By combining these concepts we can build increasingly more complex claims about identity and reputation.<br />
                        <br></br>But, in order for ZK Identity applications to thrive, there needs to be significant improvement on mainly four fronts: ZK application design patterns, implementation of ZK circuits for cryptographic primitives, circuit security tools, and developer tools and infrastructure.</p>
                    <br></br>
                    <h6 id="zk-apps-and-design-patterns">ZK Apps and Design Patterns</h6>
                    <p>The question we need to ask ourselves is: What is the best way to build and use ZK tooling? Here are some considerations we need to keep in mind when building these tools:</p>
                    <ul>
                        <li><p><strong>What is the correct abstraction for identity?</strong> Is it an Ethereum address, a smart contract wallet, an ENS name, a set of attestations, ...?</p></li>
                        <li><p><strong>What are common identity claims that people care about making?</strong> Is it useful for claims to directly reference and operate on hash data stored on-chain, or is it easier if most claims are simply proofs of valid attestations by semi-trusted third-parties? Is it practical to make claims referencing historical Ethereum state in ZK proofs—and if so, what kinds of historical claims should a proving tool make easily accessible?</p></li>
                        <li><p><strong>What tools and standards should be expected from future ZK wallets and identity providers?</strong> Should wallets offer native support for ZK proof generation in order to lower proving times and increase security?</p></li>
                        <li><p><strong>What interfaces will ZK-identity-enabled apps need to conform to?</strong> Applications both on- and off-chain will need to be designed with ZK identity systems in mind.</p></li>
                        <li><p><strong>Who (or what devices and environments) can generate ZK proofs?</strong> Will they be generated in hardware wallets mobile devices, browsers, desktops , or only on dedicated proving servers?</p></li>
                    </ul>
                    <p>We can only find the answer to these questions as time goes on and these technologies become more prominent and widely adopted, so let’s start building and then we can adapt and improve existing tooling!</p>
                    <br></br>
                    <h6 id="zk-circuits-for-cryptographic-identity-primitive">ZK Circuits for Cryptographic Identity Primitive</h6>
                    <p>Stepping one level deeper in the stack, we need efficient, audited implementations of ZK circuits for core cryptographic primitives and the mathematical operations underlying them. Here is a sample of some key operations:</p>
                    <ul>
                        <li><p><strong>Non-native field arithmetic:</strong> zkSNARK arithmetic takes place in a prime field. However, cryptographic operations require us to perform operations on potentially much larger numbers—for example, secp256k1 operations require us to take the product of two 256-bit numbers modulo a third 256-bit number. The most expensive operations involved in these circuits are range checks, and one strategy for constraint optimization is to be more careful about determining when precisely we need to perform range checks.</p></li>
                        <li><p><strong>SNARK-friendly hash functions:</strong> Hash functions are useful in applications where users must make cryptographic commitments. In schemes where the hash function does not need to integrate with an existing standard, we can choose to design and implement hash functions that are specifically designed to be efficient in SNARK proofs. Two such functions include MiMC and Poseidon.</p></li>
                        <li><p><strong>SNARK-unfriendly but standardized hash functions:</strong> In many applications, we must use SNARK-unfriendly hash functions (like SHA256 or keccak) for the sake of compatibility with existing systems. For example, to prove knowledge of the private key corresponding to an ETH address, we need a ZK circuit implementation for keccak. There is lots of work to be done implementing, optimizing, and auditing these hash functions.</p></li>
                        <li><p><strong>Elliptic curve point addition:</strong> Elliptic curve cryptography is built on elliptic curve groups; therefore, we must build ZK implementations for the elliptic curve group law (point addition). These operations are expensive and this is one performance bottleneck for ZK identity systems; clever usage of PLONK and better implementations of BigNum arithmetic may help improve performance.</p></li>
                        <li><p><strong>ECDSA key generation and signature verification:</strong> ZK circuit implementations for ECDSA key generation and signature verification would allow us to build a language of identity claims that is compatible with existing ECDSA-based identity systems, such as Ethereum. Building these primitives requires us to combine implementations of EC point addition and hash functions in efficient ways.</p></li>
                        <li><p><strong>Elliptic curve pairing:</strong> Pairing-friendly elliptic curves give us access to bilinear maps, enabling polynomial commitments, BLS aggregate signature verification, recursive SNARK verification, Verkle Trees, and more. Efficient implementations of ZK circuits for elliptic curve pairings will unlock a huge variety of new cryptographic operations.</p></li>
                        <li><p><strong>Cryptographic accumulator inclusion checks:</strong> Verkle tree inclusion proofs are verifiable in SNARKs, once we have ZK circuits for polynomial commitment verification. Merkle tree inclusion proofs are verifiable today, and are practical for trees built with SNARK-friendly hash functions. MPT inclusion proofs enable us to verify light client proofs in a SNARK. In all of these cases, accumulator inclusion proof verification allows SNARKs to access data that is rolled up into a succinct commitment (”root”) of global system state—if you provide the data you’re accessing, the system state root, and a proof of inclusion as input to the SNARK, then the verifier only needs to verify your succinct proof and check that the root is correct, rather than the full system state.</p></li>
                        <li><p><strong>Recursive SNARK verification:</strong> Recursive SNARKs are made possible by implementation of elliptic curve pairings and/or polynomial commitment verification inside of zkSNARKs. This unlocks a new dimension of programmability and complexity in identity claims.</p></li>
                    </ul>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/use_cases/identity_why`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/use_cases/identity_how2`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default IdentityHow;