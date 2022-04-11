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
                <div className='buttonsGroup'>
                    <Link to='/zklands'>
                        <Button text="Back"></Button>
                    </Link>
                    <Link to='/course'>
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