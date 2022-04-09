import Card from '../components/Card';
import imgLab from '../img/lab.png'

function Home() {
    return (
        <div>
            <div className="container container-small">
                <p>Some text<br></br>Did you know that this and that is intersting?</p>
            </div>
            <div className="container">
                <h3>Section 1: Prerequisite topics</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab}></Card>
                    <Card title="Modular Arithmetic" image={imgLab}></Card>
                    <Card title="Discrete Maths" image={imgLab}></Card>
                    <Card title="Number Theory" image={imgLab}></Card>
                </div>
            </div>
            <div className="container">
                <h3>Section 2: Zero Knowledge (Pre-Blockchain)</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab}></Card>
                    <Card title="Modular Arithmetic" image={imgLab}></Card>
                    <Card title="Discrete Maths" image={imgLab}></Card>
                    <Card title="Number Theory" image={imgLab}></Card>
                </div>
            </div>
            <div className="container">
                <h3>Section 3: Zero Knowledge (Post-Blockchain)</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab}></Card>
                    <Card title="Modular Arithmetic" image={imgLab}></Card>
                    <Card title="Discrete Maths" image={imgLab}></Card>
                    <Card title="Number Theory" image={imgLab}></Card>
                </div>
            </div>
            <div className="container">
                <h3>Section 4: Future of Zero Knowledge</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab}></Card>
                    <Card title="Modular Arithmetic" image={imgLab}></Card>
                    <Card title="Discrete Maths" image={imgLab}></Card>
                    <Card title="Number Theory" image={imgLab}></Card>
                </div>
            </div>
        </div>
    )
}

export default Home;