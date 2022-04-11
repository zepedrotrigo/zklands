import { Link } from 'react-router-dom';
import globalVars from '../globalVars';
import "./Card.css";
import Button from "./Button";

function Card(props) {
    const getCourseTitle = (title) => {
        globalVars.chosenCourse = title;
    }

    return (
        <div className="card">
            <img src={props.image} alt="course's illustration"></img>
            <h6>{props.title}</h6>
            <Link to={props.linkTo}>
                <Button text={props.buttonText} onClick={() => getCourseTitle(props.title)}></Button>
            </Link>
        </div >
    )
}

export default Card;