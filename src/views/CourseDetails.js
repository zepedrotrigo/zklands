import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import courses from '../json/courses.json';
import '../App.css';
import Container from '../components/Container';
import Button from "../components/Button";

function CourseDetails() {
    let location = useLocation().pathname;
    let course = location.split("/")[1];

    return (
        <div>
            <Container>
                <h3>{courses[course]["name"]}</h3>
                {displayContent(course)}
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
        content.push(<p>{ovr[keyName]}</p>);
    })

    return content;
}

export default CourseDetails;