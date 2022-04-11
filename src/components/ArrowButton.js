import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import "./ArrowButton.css";

function ArrowButton(props) {
    let dir = props.dir === "left" ? faAnglesLeft : faAnglesRight;

    return (
        <div className='arrow-btn'>
            <button onClick={props.onClick}><FontAwesomeIcon icon={dir} style={{color: "#070464"}}/></button>
        </div>
    )
}

export default ArrowButton;