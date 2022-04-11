import React from 'react';
import { Link } from 'react-router-dom';
import globalVars from '../globalVars';
import courses from '../json/courses.json';
import '../App.css';
import Container from '../components/Container';
import Button from "../components/Button";

function CourseDetails() {
    return (
        <div>
            <Container>
                <h3>{globalVars.chosenCourse}</h3>
                {displayContent(globalVars.chosenCourse)}
                <Link to='/'>
                    <Button text="Go back!"></Button>
                </Link>
            </Container>
        </div>
    );
}

function displayContent(course) {
    let l;
    let content = [];
    let ovr = courses[course]["overview"];

    Object.keys(ovr).map(function (keyName, keyIndex) {
        content.push(<p>{ovr[keyName]}</p>);
    })

    return content;
}

export default CourseDetails;