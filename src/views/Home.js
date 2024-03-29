import React, { useEffect } from 'react';
import '../App.css';
import Container from '../components/Container';
import Card from '../components/Card';
import imgLab from '../img/lab.png';
import 'animate.css';

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0)
    });
    
    return (
        <div>
            <Container>
                <h3>ZK Lands</h3>
                <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container extClass={"container no-anim"}>
                <h3>SECTION 1: PREREQUISITE TOPICS</h3>
                <div className='cardsGroup'>
                    <Card title="Applied Cryptography" image={imgLab} buttonText="Start!" linkTo="/applied_cryptography/digital_signatures"></Card>
                    <Card title="Modular Arithmetic" image={imgLab} buttonText="Start!" linkTo="/modular_arithmetic/chinese_remainder_theorem"></Card>
                    <Card title="Discrete Maths" image={imgLab} buttonText="Start!" linkTo="/algebra_and_discrete_maths/groups_and_fields"></Card>
                    <Card title="Number Theory" image={imgLab} buttonText="Start!" linkTo="/number_theory/theorems"></Card>
                </div>
            </Container>
            <Container>
                <h3>SECTION 2: ZERO KNOWLEDGE (PRE-BLOCKCHAIN)</h3>
                <div className='cardsGroup'>
                    <Card title="Interactive Proofs" image={imgLab} buttonText="Start!" linkTo="/interactive_proofs/interactive_proofs"></Card>
                    <Card title="ZKP Properties" image={imgLab} buttonText="Start!" linkTo="/zkp_properties/zkp_properties"></Card>
                </div>
            </Container>
            <Container>
                <h3>Section 3: Zero Knowledge (Post-Blockchain)</h3>
                <div className='cardsGroup'>
                    <Card title="ZK-SNARKS" image={imgLab} buttonText="Start!" linkTo="/zk_snarks/algebraic_circuits"></Card>
                    <Card title="ZK-STARKS" image={imgLab} buttonText="Start!" linkTo="/zk_starks/intro"></Card>
                    <Card title="More Proof Systems" image={imgLab} buttonText="Start!" linkTo="/more_proof_systems/intro"></Card>
                    <Card title="Pratical Use Cases" image={imgLab} buttonText="Start!" linkTo="/use_cases/intro"></Card>
                </div>
            </Container>
        </div>
    )
}

export default Home;