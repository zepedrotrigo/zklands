import "./Card.css";
import Button from "./Button";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image}></img>
            <h6>{props.title}</h6>
            <Button onClick='alert("hey")' text="Start!"></Button>
        </div >
    )
}

export default Card;