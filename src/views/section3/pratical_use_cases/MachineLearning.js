import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function MachineLearning() {
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
                <h3>Machine Learning and ZK</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <p>Compute heavy applications like Machine learning algorithms are too expensive to run directly on the blockchain. Therefore, we need to perform these algorithms off-chain and come up with a way to verify that the computations have been executed and that their result is accurate.<br />
                        <br></br>Zero knowledge proofs allow this concept to work by providing a proof that the computations were correctly executed, whilst also protecting private data such as input parameters. The proof can then be verified once it is in the chain for a much lower computational cost than directly running the machine learning algorithm in the blockchain, enabling the implementation of on-chain private machine learning models.<br />
                        <br></br>For example, consider this statement: "I will execute a machine learning model on some private input data X and get this result."<br />
                        <br></br>For this concept to work, it is very important to commit to our private data X by performing an hash function hash(X) and publicly share its output with everyone because, by doing so, the hash commitment proves that we have some data/model. Furthermore, when a proof of computation is later performed it proves two things:</p>
                    <ul>
                        <li><p>The computation executed on the private input results in the given output.</p></li>
                        <li><p>The computations were executed on inputs that match the publicly known commited hash.</p></li>
                    </ul>
                    <p>The second condition must be met in order for the first one to be valid, since otherwise we could have performed the computations on inputs that are favorable to the model instead of using the inputs we’ve commited to. By not pre-commiting to our inputs, we could simply write a rule-based model that always returned true values for our favorable input data.<br />
                        <br></br>Zero knowledge proof protocols allow the owner of a machine learning model to convince others that the model computes a particular prediction on a data sample without leaking any information about the machine learning model itself.<br />
                    </p>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/use_cases/identity_how2`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/use_cases/voting`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default MachineLearning;