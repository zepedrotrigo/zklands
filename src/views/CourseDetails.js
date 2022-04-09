import React from 'react';
import { Link } from 'react-router-dom';
import globalVars from '../globalVars';
import course_details from '../text_files/course_details.json';
import Button from "../components/Button";

class CourseDetails extends React.Component {
    constructor(props) {
        super(props);
    };

    loadCourseDetails() {
        const course = globalVars.chosenCourse
        return course_details[course]
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h3>{globalVars.chosenCourse}</h3>
                    <p>{this.loadCourseDetails()}</p>
                    <Link to='/'>
                        <Button text="Go back!"></Button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default CourseDetails;