import { Link, useLocation, } from 'react-router-dom';
import { useState } from 'react';
import courses from '../json/courses.json';
import '../App.css';
import Container from '../components/Container';
import ArrowButton from "../components/ArrowButton"

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import afl from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-forest-light';
SyntaxHighlighter.registerLanguage('python', python);

function Course() {
    const [pageCounter, setCount] = useState(0);
    let location = useLocation().pathname;
    let course = location.split("/")[1];
    let currentPage = courses[course]["pages"][pageCounter]

    return (
        <div>
            <Container extClass="container bg no-anim">
                <div className='dynamic-content'>
                    <h3>{currentPage["title"]}</h3>
                    {displayContent(currentPage)}
                </div>
                <ArrowButton dir="left" onClick={() => setCount(pageCounter - 1)}/>
                <ArrowButton dir="right" onClick={() => setCount(pageCounter + 1)}/>
            </Container>
        </div>
    );
}

function displayContent(page) {
    let l;
    let content = [];
    let lines = page["lines"]

    Object.keys(lines).map(function (keyName, keyIndex) {
        l = lines[keyName]

        if (l["type"] === "text")
            content.push(<p>{l["content"]}</p>);
        else if (l["type"] === "jsx")
            content.push(<div dangerouslySetInnerHTML={{ __html: l["content"] }}></div>);
        else
            content.push(<SyntaxHighlighter language='l["type"]' style={afl}>{l["content"]}</SyntaxHighlighter>);
    })

    if (page["terminal"])
        content.push(<iframe title="replIDE" frameBorder="0" width="100%" height="500rem" src={page["replit"]}></iframe>);

    return content;
}

export default Course;