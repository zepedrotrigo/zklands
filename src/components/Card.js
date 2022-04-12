import { Link } from 'react-router-dom';
import "./Card.css";
import Button from "./Button";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="course's illustration"></img>
            <h6>{props.title}</h6>
            <Link to={props.linkTo}>
                <Button text={props.buttonText}></Button>
            </Link>
        </div >
    )
}

export default Card;