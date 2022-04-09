import "./Card.css";
import Button from "./Button";

function Card(props) {

    const hi = () => {
        console.log('hi!');
    }

    return (
        <div className="card">
            <img src={props.image}></img>
            <h6>{props.title}</h6>
            <Button text="Start!" onClick={hi}></Button>
        </div >
    )
}

export default Card;