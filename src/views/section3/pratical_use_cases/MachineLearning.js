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
            <Container extClass="container bg-margin no-anim">
                <h3>ZK Lands</h3>
                <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container extClass="container bg-margin bg-padding no-anim">
                <h3>Machine Learning and ZK (biometric)</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/use_cases/identity_how`}>
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