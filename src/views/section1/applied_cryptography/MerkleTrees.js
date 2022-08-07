import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';

function MerkleTrees() {
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
                <h3>Merkle Trees</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>In computer science, a tree is a hierarchical data structure composed by a root (at the top), nodes and leaves (at the bottom). Each node can be connected to many children nodes, but can only be connected to one parent node.</p>
                    <p>Merkle trees (also known as hash trees) are used in blockchains for data verification and synchronization. Hash functions allow the fingerprinting of data by mapping an input of arbitrary size to a unique fixed size output called hash or digest.</p>
                    <p>In a merkle tree, transactions lie at the bottom of the tree in the form of hashes. Then, leafs are combined in groups of two and hashed again to form a parent node for them. The process repeats itself, continuously hashing upwards until the root is created.</p>
                    <p>The hash of the root is a unique, unchangeable summary of all the transactions underneath it. If one single transaction is changed, the output of the hash function is also changed which results in a different root hash.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/applied_cryptography/public_key_encryption`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/applied_cryptography/polynomial_commitment_schemes`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default MerkleTrees;