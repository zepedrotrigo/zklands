import '../App.css';
import Container from '../components/Container';
import Card from '../components/Card';
import imgLab from '../img/lab.png';
import 'animate.css';

function Home() {

    return (
        <div>
            <Container>
                <h3 className='align-center'>ZK Lands</h3>
                <h5 className='align-center'>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container>
                <h3 className='align-center'>Section 1: Prerequisite topics</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab} buttonText="Start!" linkTo="/applied_cryptography/details"></Card>
                    <Card title="Modular Arithmetic" image={imgLab} buttonText="Start!" linkTo="/modular_arithmetic/details"></Card>
                    <Card title="Discrete Maths" image={imgLab} buttonText="Start!" linkTo="/discrete_maths/details"></Card>
                    <Card title="Number Theory" image={imgLab} buttonText="Start!" linkTo="/number_theory/details"></Card>
                </div>
            </Container>
            <Container>
                <h3 className='align-center'>Section 2: Zero Knowledge (Pre-Blockchain)</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab} buttonText="Start!" linkTo="/applied_cryptography/details"></Card>
                    <Card title="Modular Arithmetic" image={imgLab} buttonText="Start!" linkTo="/modular_arithmetic/details"></Card>
                    <Card title="Discrete Maths" image={imgLab} buttonText="Start!" linkTo="/discrete_maths/details"></Card>
                    <Card title="Number Theory" image={imgLab} buttonText="Start!" linkTo="/number_theory/details"></Card>
                </div>
            </Container>
            <Container>
                <h3 className='align-center'>Section 3: Zero Knowledge (Post-Blockchain)</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab} buttonText="Start!" linkTo="/applied_cryptography/details"></Card>
                    <Card title="Modular Arithmetic" image={imgLab} buttonText="Start!" linkTo="/modular_arithmetic/details"></Card>
                    <Card title="Discrete Maths" image={imgLab} buttonText="Start!" linkTo="/discrete_maths/details"></Card>
                    <Card title="Number Theory" image={imgLab} buttonText="Start!" linkTo="/number_theory/details"></Card>
                </div>
            </Container>
            <Container>
                <h3 className='align-center'>Section 4: Future of Zero Knowledge</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab} buttonText="Start!" linkTo="/applied_cryptography/details"></Card>
                    <Card title="Modular Arithmetic" image={imgLab} buttonText="Start!" linkTo="/modular_arithmetic/details"></Card>
                    <Card title="Discrete Maths" image={imgLab} buttonText="Start!" linkTo="/discrete_maths/details"></Card>
                    <Card title="Number Theory" image={imgLab} buttonText="Start!" linkTo="/number_theory/details"></Card>
                </div>
            </Container>
        </div>
    )
}

export default Home;