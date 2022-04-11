import { Link, useLocation } from 'react-router-dom';
import courses from '../json/courses.json';
import "./List.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'

function List(props) {
    let location = useLocation().pathname;
    let course = location.split("/")[1];

    return (
        <div className="list">
            {displayContent(course)}
        </div >
    )
}

function displayContent(course) {
    let content = [];
    let ovr = courses[course]["topics"];

    Object.keys(ovr).map(function (keyName, keyIndex) {
        content.push(
            <div className='list-item'>
                <div className='list-text'>
                    <span className='list-span icon'><FontAwesomeIcon icon={faCrosshairs}/></span>
                    <h6><span className='list-span'>{ovr[keyName]}</span></h6>
                </div>
            </div>);
    })

    return content;
}

export default List;