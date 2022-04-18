import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import courses from '../json/courses.json';
import '../App.css';
import Container from '../components/Container';
import ArrowButton from "../components/ArrowButton"

function CourseDetails() {
    let location = useLocation().pathname;
    let course = location.split("/")[1];

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
                <h3>{courses[course]["name"]}</h3>
                <div className='justify'>
                    {displayContent(course)}
                </div>
                <div className='arrowsGroup'>
                    <Link to={`/zklands`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/${course}`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

function displayContent(course) {
    let content = [];
    let ovr = courses[course]["overview"];

    Object.keys(ovr).map(function (keyName, keyIndex) {
        content.push(<h5 className='top-spacing-bg'>{ovr[keyName]}</h5>);
    })

    return content;
}

export default CourseDetails;