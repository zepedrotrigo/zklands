import { Link } from 'react-router-dom';
import globalVars from '../globalVars';
import courses from '../json/courses.json';
import '../App.css';
import Container from '../components/Container';
import Button from "../components/Button";

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import afl from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-light';
SyntaxHighlighter.registerLanguage('python', python);

function Course() {
    return (
        <div>
            <Container>
                <div className='dynamic-content'>
                    <h3>{globalVars.chosenCourse}</h3>
                    {displayContent(globalVars.chosenCourse, 0)} {/*TODO page number is hardcoded*/}
                </div>
                <Link to='/zklands'>
                    <Button text="Back"></Button>
                </Link>
            </Container>
        </div>
    );
}

function displayContent(course, page) {
    let l;
    let content = [];
    let p = courses[course]["pages"][page];
    let lines = p["lines"]

    Object.keys(lines).map(function(keyName, keyIndex) {
        l = lines[keyName]

        if (l["type"] === "text")
            content.push(<p>{l["content"]}</p>);
        else if(l["type"] === "jsx")
            content.push(<div dangerouslySetInnerHTML={{ __html: l["content"] }}></div>);
        else
            content.push(<SyntaxHighlighter language='l["type"]' style={afl}>{l["content"]}</SyntaxHighlighter>);
    })

    if (p["terminal"])
        content.push(<iframe title="replIDE" frameBorder="0" width="100%" height="500rem" src={p["replit"]}></iframe>);

    return content;
}

export default Course;