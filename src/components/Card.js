import { Link } from 'react-router-dom';
import "./Card.css";
import Button from "./Button";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image}></img>
            <h6>{props.title}</h6>
            <Link to='/course_details'>
                <Button text="Start!"></Button>
            </Link>
        </div >
    )
}

export default Card;