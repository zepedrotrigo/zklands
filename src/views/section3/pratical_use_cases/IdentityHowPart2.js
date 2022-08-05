import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function IdentityHowPart2() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Container extClass="container bg-margin no-anim">
                <h3>ZK Lands</h3>
                <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
            </Container>
            <Container extClass="container bg-margin bg-padding no-anim">
                <h3>Identity: How</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="developer-tools-and-infrastructure">Developer Tools and Infrastructure</h6>
                    <p>Currently, ZK developers require a relatively high level of mathematical background in order to write circuits. These circuits are written in very low-level code with few abstractions, which increases overall development effort required to produce a sophisticated circuit with thousands or even millions of constraints that need to be manually written and audited. Considering all of this, there needs to exist relevant, pratical tooling that provides useful and efficient abstractions for ZK Developers to use in order to save them time and effort.<br />
                        <br></br>Specifically, there is an urgent need for a robust toolstack for PLONK, a protocol which uses a universal reference string that is able to build proofs with any type of circuit in mind without the need to redo the trusted setup process. Besides PLONK, here are a few active areas of work in ZK developer tooling:</p>
                    <ul>
                        <li><p><strong>Higher-level DSLs:</strong> Current languages for writing SNARKs require developers to manually write constraints. We are interested in production-grade higher-level DSLs that are easier to develop in or which may even perform constraint optimizations intelligently. Additional nice-to-haves include user-defined data types/annotations, and better witness generation systems. Further down the line, DSLs that enable automation of testing, verification, or static analysis of circuits may increase our confidence in the code that we write. ZK Learning Group participants were sped up massively by Kevin Kwok’s ZKREPL project, which incorporates a number of the above-described features.</p></li>
                        <li><p><strong>Smarter development environments:</strong> Syntax highlighting, detection of compile-time errors during development, IntelliSense-like tools using a combination of AST/witness analysis, annotations and shell/REPL environments.</p></li>
                        <li><p><strong>Build, testing, and deployment tools; automation and pipeline management:</strong> K developers must currently manage ptau files, key files, build configurations, build files, and release distribution processes manually. The snarkjs tutorial currently lists 26 steps that a developer must perform to create and verify a zkSNARK, involving manual operations on over 20 files. There aren’t widely-accepted best practices for how to publish protocol parameters in a way that is accessible and auditable. Different versions of circuits must be maintained manually for different environments (i.e. turning off some constraints during testing). Tools like ProjectSophon’s hardhat-circom and Weijie Koh’s circom-helper are great first steps that help to simplify workflows drastically, but much work remains to be done.</p></li>
                        <li><p><strong>Common standards for intermediate representations:</strong> Different teams use different languages and tools to write ZK circuits: circom, arkworks, libsnark, and many more. Circuits written with different toolchains should ideally compile to a common IR so that generating proofs, verifying proofs, auditing protocol setups, and other common tasks can be toolchain-agnostic.</p></li>
                        <li><p><strong>Easier-to-use and more efficient compilers and provers:</strong> Slow key compilation and proving slows development and testing. Optimizing compilation and proving, and making libraries for these processes easy to run out-of-the-box (i.e. setting up a remote prover on a big server should be easy!) will save developers time. ZPrize is one industry initiative that aims to accelerate this work and more.</p></li>
                        <li><p><strong>(Pre-PLONK) Shared trusted setup infrastructure:</strong> Production-grade zkSNARK apps are difficult to launch right now because of the difficulty in coordinating trusted setup. ZCash, AZTEC Protocol, Tornado, and Semaphore all had to write customized trusted setup infrastructure. There have been some attempts to build out more reusable trusted setup tooling, but running these ceremonies is still extremely labor-intensive. Note that this will likely not be a problem in the longer term however as we move to protocols that don’t require per-circuit trusted setup.</p></li>
                        <li><p><strong>(Post-PLONK) Tools for working with SNARK recursion:</strong> SNARKs that support recursive verification enable us to build “programmable” SNARKs, where SNARK code could be modified “on-the-fly” by plugging in verifying keys to other SNARK submodules. Furthermore, recursive SNARKs also allow developers to parallelize proof generation. Supporting this functionality in practice is a hard problem that will likely be worked on for the next several years...</p></li>
                    </ul>
                    <br></br>
                    <h6 id="auditing-and-verification">Auditing and Verification</h6>
                    <p>Currently, the most used approach when it comes to auditing and verification are manual, human audits. Manual audits are inconsistent in quality and very slow. We also have to consider that these circuits are extremely complex and hard to verify manually and it is very easy to miss a constraint by distraction. There are many ways to improve this process:</p>
                    <ul>
                        <li><p><strong>Building a community of reviewers:</strong> Teams often have difficulty finding specialists with expertise with ZK application development to review their circuits and code. We can encourage existing ZK-focused teams, such as engineers at rollup companies as well as application developers, to “trade” reviews, and we can also collectively begin to train auditors.</p></li>
                        <li><p><strong>Establishing best practices for circuit engineering and review:</strong> As the ecosystem matures, we will want to develop best practices for building, annotating, documenting, and reviewing ZK circuits.</p></li>
                        <li><p><strong>Manual proofs of correctness for circuit primitives:</strong> For important primitives, such as hash function or ECDSA circuits, it may be possible to manually write proofs of correctness for such primitives that can be checked with a proof checker. Other circuit builders would then be able to use these primitives with greater confidence in their correctness.</p></li>
                        <li><p><strong>Automated witness uniqueness verification:</strong> Ecne is the first automated R1CS witness uniqueness verifier. This project enables us to verify whether or not a ZK circuit may have any missing constraints, which is a major step forwards in building confidence in our ZK systems. We hope to support and encourage more work in similar directions.</p></li>
                        <li><p><strong>Solver-based methods for formal verification:</strong> Some teams are exploring automated methods for proving the equivalence of a ZK circuit with a formal specification. Efforts in this area will also require us to develop a common set of benchmarks, as well as a language for specifying ZK circuits (partially or completely).</p></li>
                    </ul>
                    <br></br>
                    <p>Once again, for a deeper explanation, we advise you to read <a href="https://0xparc.org/blog/zk-id-2">0xparc’s article</a> on this subject.</p>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/use_cases/identity_how`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/use_cases/machine_learning`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default IdentityHowPart2;