import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function IdentityWhy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Link to={`/`} style={{ textDecoration: "none" }}>
                <Container extClass="container home no-anim">
                    <h3>ZK Lands</h3>
                    <h5>{"A fun, free platform for learning about zero knowledge!"}</h5>
                </Container>
            </Link>
            <Container extClass="container  bg-padding no-anim">
                <h3>Identity: Why</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="identity-systems">Identity systems</h6>
                    <p>Zero knowledge proofs allow us to create decentralized identity systems. But, why are decentralized identity systems important?<br />
                        <br></br>Tipically, identity systems are controlled by centralized entities such as governments, social media companies, e-commerce websites. Such entities have a lot of power and responsibility at their hands and, sometimes, they need to make difficult social, moral and financial decisions that are impossible to be aligned with every user’s beliefs. Examples of this are:<br />
                        <br></br>"When is a temporary/permanent suspension in a social media platform considered to be in the interest of public safety instead of unjustified censorship?"<br />
                        <br></br>The answer to this question is not always clear. Should social media operators have the responsibility of making such decisions?</p>
                    <p>Moreover, centralized systems are also central points of failure in case of cyberattacks, exposing private data from millions of users, such as identity associated information.<br />
                    </p>
                    <br></br>
                    <h6 id="credible-claims">Credible Claims</h6>
                    <p>In order to do business, we need to trust all parties present in the negotiation process. To build trust, we need to be able to make credible claims, for example:</p>
                    <ul>
                        <li><p><em>"Trust me I have sold tons of computers and my clients are always satisfied!"</em> is not a credible claim of trust.</p></li>
                        <li><p>A rating given by an e-commerce website to a seller of 4/5 with 2000 sales registered is a credible claim of trust.</p></li>
                    </ul>
                    <p>Currently, the task of producing credible claims is delegated to a trusted authority, such as an e-commerce website, who keeps track of all user’s identity and reputation, in order to verify their credibility (or lack thereof). By using zkSNARKs to produce credible claims of arbitrary complexity, we can create digital identity systems that allow the user to be in control of his data.</p>
                    <br></br>
                    <h6 id="privacy">Privacy</h6>
                    <p>The majority of identity systems in place today rely on three important questions about the user to generate a believable claim:</p>
                    <ul>
                        <li><p>What does the user know? (secret password, seed, pin, account recovery question)</p></li>
                        <li><p>What does the user have? (mobile device, cookie, access token)</p></li>
                        <li><p>Who is the user? (biometric authentication)</p></li>
                    </ul>
                    <br></br><p>This data must be kept private, for obvious reasons. If we would produce credible claims with completely transparent data, that could produce negative byproducts, for example:<br />
                        <br></br>Imagine you had to share your entire transactional history with a seller before you could buy an item of an e-commerce website in order for him to trust your ability to pay for said item. The seller could then use this information for other unrelated actions like advertising or blackmailing.<br />
                        <br></br>To prevent this kind of interactions, we have to delegate even more power to central authorities who store our private data in order for them to be able to generate credible claims about us while guaranteeing privacy.</p>
                    <br></br>
                    <h6 id="the-role-of-cryptography">The Role of Cryptography</h6>
                    <p>Until now, we have discussed centralized identity systems capable of generating credible claims and why there are plenty of reasons to adopt decentralized systems. But how is it possible for someone to trust a claim without knowing the other party’s data or the claim being attested by a credible centralized authority? That’s where cryptography comes in:</p>
                    <ul>
                        <li><p><strong>Digital signature schemes</strong> allow for credible claims about the consistency of an identity online by signing a series of messages with the same private key. “I am authorized to charge to Alice’s credit card.”</p></li>
                        <li><p><strong>Group signature schemes</strong> allow for more complex privacy preserving claims about identity. “I am a member of this alumni organization, but I won’t tell you which member.”</p></li>
                        <li><p><strong>Signature aggregation, multi-signature, and threshold signature schemes</strong> allow for claims about group behavior, under various different resource constraints. “This large collective body—not just a single rogue employee—has authorized a currency transfer from our financial accounts.”</p></li>
                        <li><p><strong>Consensus schemes and programmable smart contracts</strong> for credible and irreversible commitments to future actions. “If you send me digital asset A, I will immediately send you digital asset B in return.”</p></li>
                    </ul>
                    <br></br><p>For a deeper explanation, we advise you to read <a href="https://0xparc.org/blog/zk-id-1">0xparc’s article</a> on this subject.</p>
                </h6>

                <div class='arrowsGroup'>
                    <Link to={`/use_cases/intro`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/use_cases/identity_how`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default IdentityWhy;