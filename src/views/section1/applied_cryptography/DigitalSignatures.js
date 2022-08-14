import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';

function AppliedCryptography() {
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
                <h3>Digital Signatures</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Digital Signatures work as a way of assuring the authenticity and integrity of documents and messages by checking if they were created by a specific authority or entity. These type of mathematical protocol relies on the use of asymmetric cryptography: using different private and public keys.</p>
                    <p>The private key is generated using some algorithm, that may vary depending on its use case  (for example the Diffie-Hellman protocol), and alongside with it comes a public key.</p>
                    <p>The signature is an encryption of the document alongside with the information of the entity that signs the documents using its private key.</p>
                    <p>The validation is done using the decipher of the signature using the public key of the entity.</p>
                    <p>Both the signature and the validation protocol use elliptic curve cryptography that you can see in more detail <a href="https://academy.horizen.io/technology/expert/digital-signatures/">here</a>.</p>
                    <p>This type of signature is a nice tool to have, because, for example, if someone signs a document then it's impossible for them to say they didn't sign it since the key for signing it is private.</p>
                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/applied_cryptography/public_key_encryption`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default AppliedCryptography;