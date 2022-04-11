import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import courses from '../json/courses.json';
import '../App.css';
import Container from '../components/Container';
import Button from "../components/Button";
import List from '../components/List';

function CourseDetails() {
    let location = useLocation().pathname;
    let course = location.split("/")[1];

    return (
        <div>
            <Container extClass="container bigger-padding">
                <h3 className='align-center bolder'><strong>{courses[course]["name"]}</strong></h3>
                <div className='details-text'>
                    {displayContent(course)}
                </div>
                <List></List>
                <div className='buttonsGroup'>
                    <Link to='/zklands'>
                        <Button text="Back"></Button>
                    </Link>
                    <Link to={`/${course}`}>
                        <Button text="Continue"></Button>
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
        content.push(<h5><strong>{ovr[keyName]}</strong></h5>);
    })

    return content;
}

export default CourseDetails;