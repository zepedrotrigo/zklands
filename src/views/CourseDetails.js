import { Link } from 'react-router-dom';
import Button from "../components/Button";

function CourseDetails() {
    return (
        <div>
            <div className="container container-small">
                <p>Some text<br></br>Did you know that this and that is intersting?</p>
                <Link to='/'>
                    <Button text="Go back!"></Button>
                </Link>
            </div>
        </div>
    )
}

export default CourseDetails;