import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import Button from '../../../components/Button';
import 'animate.css';
import Latex from 'react-latex';
import img1 from '../../../img/kea.png'

function LinearIP() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Container extClass="container  no-anim">
                <h3>ZK Lands</h3>
                <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container extClass="container  bg-padding no-anim">
                <h3>ZK-SNARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                <h6 class="title" id="linear-pcp">Linear Interactive Proofs</h6>
                    <p>In this section we will try to show a way to prove we know the solution for a particular <span class="math inline"><em>Q</em><em>A</em><em>P</em></span> without revealing anything else about the solution, for that we’ll follow the Pinocchio Protocol and we’ll also assume you’re familiar with the basis of elliptic curve cryptography and pairings.<br />
                        First let’s talk about the cryptography assumption we use to guarantee the security of the process: The knowledge of exponent assumption.</p>
                    <img src={img1} alt="Knowledge of exponent assumption formula" style={{width:'95%'}}></img>

                    <p>The idea is that if you have some pair of points <span class="math inline"><em>P</em></span> and <span class="math inline"><em>Q</em></span> such <span class="math inline"><em>P</em> * <em>k</em> = <em>Q</em></span>, then given another point <span class="math inline"><em>C</em></span>, we can only calculate <span class="math inline"><em>C</em> * <em>k</em></span> if <span class="math inline"><em>C</em></span> is somehow related to <span class="math inline"><em>P</em></span> in some way. For example, imagine we know that <span class="math inline"><em>P</em> * <em>k</em> = <em>Q</em></span>, but we don’t know what <span class="math inline"><em>k</em></span> is, then if give you another two points <span class="math inline"><em>R</em></span> and <span class="math inline"><em>S</em></span> and say that <span class="math inline"><em>R</em> * <em>k</em> = <em>S</em></span>, then I must know some factor <span class="math inline"><em>r</em></span> such as <span class="math inline">(<em>P</em>*<em>r</em>) * <em>k</em> = (<em>Q</em>*<em>r</em>) ⇔ <em>R</em> * <em>k</em> = <em>S</em></span>. Also checking if <span class="math inline"><em>R</em> * <em>k</em> = <em>S</em></span> can be done using pairings by checking if <span class="math inline"><em>e</em>(<em>P</em>,<em>Q</em>) = <em>e</em>(<em>R</em>,<em>S</em>)</span>.<br />
                        <br></br>Following the same logic, we can understand that if instead of one pair of points <span class="math inline">(<em>P</em>,<em>Q</em>)</span> such <span class="math inline"><em>P</em> * <em>k</em> = <em>Q</em></span>,we have, for example, five of them ( <span class="math inline"><em>P</em><sub><em>i</em></sub> * <em>k</em> = <em>Q</em><sub><em>i</em></sub></span>, for <span class="math inline"><em>i</em> = 1, 2, 3, 4, 5</span>) then if I provide a pair <span class="math inline">(<em>R</em>,<em>S</em>)</span> where <span class="math inline"><em>R</em> * <em>k</em> = <em>S</em></span>, <span class="math inline"><em>R</em></span> must be related to all the <span class="math inline"><em>P</em><sub><em>i</em></sub></span>, in fact <span class="math inline"><em>R</em></span> must be a linear combination of them, meaning I know <span class="math inline"><em>r</em><sub>1</sub>, …, <em>r</em><sub>5</sub></span> such <span class="math inline"><em>P</em><sub>1</sub> * <em>r</em><sub>1</sub> + … + <em>P</em><sub>5</sub> * <em>r</em><sub>5</sub> = <em>R</em></span> and it follows that <span class="math inline"><em>Q</em><sub>1</sub> * <em>r</em><sub>1</sub> + … + <em>Q</em><sub>5</sub> * <em>r</em><sub>5</sub> = <em>S</em></span>. So <span class="math inline"><em>S</em></span> comes after <span class="math inline"><em>R</em></span> and given a set of points <span class="math inline"><em>P</em><sub><em>i</em></sub></span>, I can only calculate the corresponding <span class="math inline"><em>Q</em><sub><em>i</em></sub></span> point if I know <span class="math inline"><em>k</em></span>, but if I know <span class="math inline"><em>k</em></span> then I can create a pair <span class="math inline">(<em>R</em>,<em>S</em>)</span> where <span class="math inline"><em>R</em> * <em>k</em> = <em>S</em></span> for whatever <span class="math inline"><em>R</em></span> I want. Therefore is extremely crucial that whoever creates these set of points is trustworthy and deletes <span class="math inline"><em>k</em></span> after creating the points - hence the need of a "trusted setup".<br />
                        <br></br>The solution of a <span class="math inline"><em>Q</em><em>A</em><em>P</em></span> is a set of polynomials such that <span class="math inline"><em>A</em>(<em>x</em>) * <em>B</em>(<em>x</em>) − <em>C</em>(<em>x</em>) = <em>H</em>(<em>x</em>) * <em>Z</em>(*)</span> where:</p>
                    <ul>
                        <li><p><span class="math inline"><em>A</em></span> is a linear combination (from the solution <span class="math inline"><em>s</em></span>) of a set of polynomials <Latex>{`$\\{A_1,\\dots,A_m\\}$`}</Latex>;</p></li>
                        <li><p><span class="math inline"><em>B</em></span> is the linear combination of <Latex>{`$\\{B_1,\\dots,B_m\\}$`}</Latex> with the same coefficients;</p></li>
                        <li><p><span class="math inline"><em>C</em></span> is a linear combination of <Latex>{`$\\{C_1,\\dots,C_m\\}$`}</Latex> with the same coefficients.</p></li>
                    </ul>
                    <br></br>
                    <p>However, in order to prove these linear combinations directly we use elliptic curve points and pairings, so in practice what we really provide to the trusted setup is:</p>
                    <ul>
                        <li><span class="math inline"><em>G</em> * <em>A</em><sub>1</sub>(<em>t</em>), <em>G</em> * <em>A</em><sub>1</sub>(<em>t</em>) * <em>k</em><sub><em>a</em></sub></span></li>
                        <li><span class="math inline"><em>G</em> * <em>A</em><sub>2</sub>(<em>t</em>), <em>G</em> * <em>A</em><sub>2</sub>(<em>t</em>) * <em>k</em><sub><em>a</em></sub></span></li>
                        <li><span class="math inline">…</span></li>
                        <li><span class="math inline"><em>G</em> * <em>B</em><sub>1</sub>(<em>t</em>), <em>G</em> * <em>B</em><sub>1</sub>(<em>t</em>) * <em>k</em><sub><em>b</em></sub></span></li>
                        <li><span class="math inline"><em>G</em> * <em>B</em><sub>2</sub>(<em>t</em>), <em>G</em> * <em>B</em><sub>2</sub>(<em>t</em>) * <em>k</em><sub><em>b</em></sub></span></li>
                        <li><span class="math inline">…</span></li>
                        <li><span class="math inline"><em>G</em> * <em>C</em><sub>1</sub>(<em>t</em>), <em>G</em> * <em>C</em><sub>1</sub>(<em>t</em>) * <em>k</em><sub><em>c</em></sub></span></li>
                        <li><span class="math inline"><em>G</em> * <em>C</em><sub>2</sub>(<em>t</em>), <em>G</em> * <em>C</em><sub>2</sub>(<em>t</em>) * <em>k</em><sub><em>c</em></sub></span></li>
                        <li><span class="math inline">…</span></li>
                    </ul>
                    <p>Basically <span class="math inline"><em>t</em></span> is a point in which the polynomial is evaluated. <span class="math inline"><em>G</em></span> is a Generator of the elliptic curve points and <span class="math inline"><em>t</em>, <em>k</em><sub><em>a</em></sub>, <em>k</em><sub><em>b</em></sub></span> and <span class="math inline"><em>k</em><sub><em>c</em></sub></span> are numbers that must be deleted, otherwise people might forge proofs. Now, for example if we have <span class="math inline"><em>P</em> * <em>k</em><sub><em>a</em></sub> = <em>Q</em></span>, that’s simply a linear combination of <span class="math inline"><em>A</em><sub><em>i</em></sub></span> polynomials evaluated at <span class="math inline"><em>t</em></span>.</p>
                    <p>With just the points added to the trusted setup, the proves gives:</p>
                    <ul>
                        <li><p><span class="math inline"><em>π</em><sub><em>a</em></sub> = <em>G</em> * <em>A</em>(<em>t</em>), <em>π</em>’<sub><em>a</em></sub> = <em>G</em> * <em>A</em>(<em>t</em>) * <em>k</em><sub><em>a</em></sub></span></p></li>
                        <li><p><span class="math inline"><em>π</em><sub><em>b</em></sub> = <em>G</em> * <em>B</em>(<em>t</em>), <em>π</em>’<sub><em>b</em></sub> = <em>G</em> * <em>B</em>(<em>t</em>) * <em>k</em><sub><em>b</em></sub></span></p></li>
                        <li><p><span class="math inline"><em>π</em><sub><em>c</em></sub> = <em>G</em> * <em>C</em>(<em>t</em>), <em>π</em>’<sub><em>c</em></sub> = <em>G</em> * <em>C</em>(<em>t</em>) * <em>k</em><sub><em>c</em></sub></span></p></li>
                    </ul>
                    <br></br>
                    <p>To make sure all three linear combinations have the same coefficients we add another set of values to the trusted setup: <span class="math inline"><em>G</em> * (<em>A</em><sub><em>i</em></sub>(<em>t</em>)+<em>B</em><sub><em>i</em></sub>(<em>t</em>)+<em>C</em><sub><em>i</em></sub>(<em>t</em>)) * <em>b</em></span>, where, in the end, <span class="math inline"><em>b</em></span> is also discarded. Then, the prover must simply create a linear combination with these values with the same coefficients, and use the same pairing trick as above to verify that this value matches up with the provided A + B + C.<br />
                        <br></br>Now to prove that <span class="math inline"><em>A</em>(<em>x</em>) * <em>B</em>(<em>x</em>) − <em>C</em>(<em>x</em>) = <em>H</em>(<em>x</em>) * <em>Z</em>(*)</span>, we use pairing check as <span class="math inline"><em>e</em>(<em>π</em><sub><em>a</em></sub>,<em>π</em><sub><em>b</em></sub>)/<em>e</em>(<em>π</em><sub><em>c</em></sub>,<em>G</em>)? = <em>e</em>(<em>π</em><sub><em>h</em></sub>,<em>G</em>*<em>Z</em>(<em>t</em>))</span>, where <span class="math inline"><em>π</em><sub><em>h</em></sub> = <em>G</em> * <em>H</em>(<em>t</em>)</span>. For this to work we just need to add <span class="math inline"><em>G</em> * <em>Z</em>(<em>t</em>)</span> to the trusted setup. <span class="math inline"><em>H</em></span> is just a polynomial, and we predict very little ahead of time about what its coefficients will be for each individual QAP solution. Hence, we need to add yet more data to the trusted setup; specifically the sequence: G, G * t, G * t², G * t³, G * t⁴ …, in order to guarantee that we will have enough powers to compute <span class="math inline"><em>H</em>(<em>t</em>)</span>.</p>

                </h6>
                <div class='arrowsGroup'>
                    <Link to={`/zk_snarks/linear_pcp`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_snarks/snarks`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div >
    )
}

export default LinearIP;