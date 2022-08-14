import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../App.css';
import Container from '../../../components/Container';
import ArrowButton from "../../../components/ArrowButton"
import 'animate.css';
import Latex from 'react-latex';

function PolynomialConstraints() {
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
                <h3>ZK-STARKS</h3>
                <h6 className='v2 top-spacing-bg justify'>
                    <h6 id="polynomial-constraints">Polynomial Constraints</h6>
                    <p>After our main computation is done, the next set is to create a system of polynomial constraints by reducing the statement we want to prove to a new simpler one and produce a composition of polynomials and commit on them.</p>
                    <p>For example, imagine we have the initial set of constraints:</p>
                    <ul>
                        <li><p><span class="math inline"><em>a</em><sub>0</sub> = 1</span></p></li>
                        <li><p><span class="math inline"><em>a</em><sub>1</sub> = <em>x</em></span> (unknown)</p></li>
                        <li><p><span class="math inline"><em>a</em><sub>1022</sub> = 2338775057</span></p></li>
                        <li><p><span class="math inline"><em>a</em><sub><em>n</em> + 2</sub> = <em>a</em><sub><em>n</em> + 1</sub><sup>2</sup> + <em>a</em><sub><em>n</em></sub><sup>2</sup></span></p></li>
                    </ul>
                    <p>We’ll reduce this set to a simpler one about polynomials in a way that if this simpler statement is verified then our initial set is also true.</p>
                    <p>The way we can to this is by using the idea we previously talked about, when we created pairs of points from the information we have, but in this case the <span class="math inline"><em>y</em><sub>0</sub>, <em>y</em><sub>1</sub>, …, <em>y</em><sub><em>k</em></sub></span> is simply <span class="math inline"><em>a</em><sub>0</sub>, <em>a</em><sub>1</sub>, …, <em>a</em><sub>1022</sub></span>.<br />
                        So, by picking a random generator we have the pairs: <span class="math inline">(1,0), (<em>g</em>,<em>a</em><sub>1</sub>), …(<em>g</em><sup>1022</sup>,<em>a</em><sub>1022</sub>)</span>. So we can say that there is a polynomial <span class="math inline"><em>f</em>(<em>x</em>)</span>, such <span class="math inline"><em>f</em>(1) = <em>a</em><sub>0</sub>, <em>f</em>(<em>g</em>) = <em>x</em>, …, <em>f</em>(<em>g</em><sup>1022</sup>) = 2338775057</span>.</p>
                    <p>This way we can transform our set of constraints as:</p>
                    <ul>
                        <li><p><span class="math inline"><em>f</em>(<em>g</em><sup>0</sup>) = 1</span></p></li>
                        <li><p><span class="math inline"><em>f</em>(<em>g</em><sup>2022</sup>) = 2338775057</span></p></li>
                        <li><p><span class="math inline"><em>f</em>(<em>g</em><sup>2</sup>⋅<em>g</em><sup><em>i</em></sup>) = <em>f</em>(<em>g</em>⋅<em>g</em><sup><em>i</em></sup>)<sup>2</sup> + <em>f</em>(<em>g</em><sup><em>i</em></sup>)<sup>2</sup></span>, for <span class="math inline">0 ≤ <em>i</em> ≤ 1020</span></p></li>
                    </ul>
                    <br></br><p>If the polynomial <span class="math inline"><em>f</em>(<em>x</em>)</span> satifies the system above, then the original computation is still true.<br />
                        Now imagine that instead of having <span class="math inline"><em>f</em>(<em>g</em><sup>0</sup>) = 1</span> we have <span class="math inline"><em>f</em>(<em>g</em><sup>0</sup>) − 1 = 0</span>, if we think of <span class="math inline"><em>f</em>(<em>x</em>) − 1</span> as a new polynomial then <span class="math inline"><em>g</em><sup>0</sup></span> is a root of this polynomial. The same can be done to the other constraints, leaving us with:</p>
                    <ul>
                        <li><p><span class="math inline"><em>g</em><sup>0</sup></span> is a root of <span class="math inline"><em>f</em>(<em>x</em>) − 1</span></p></li>
                        <li><p><span class="math inline"><em>g</em><sup>1022</sup></span> is a root of <span class="math inline"><em>f</em>(<em>x</em>) − 2338775057</span></p></li>
                        <li><p><Latex>{`$\\{g^i: 0 \\leq i \\leq 1022\\}$`}</Latex> are roots of <span class="math inline"><em>f</em>(<em>g</em><sup>2</sup>⋅<em>x</em>) − <em>f</em>(<em>g</em>⋅<em>x</em>)<sup>2</sup> − <em>f</em>(<em>x</em>)<sup>2</sup></span></p></li>
                    </ul>
                    <br></br><p>From the fact that <span class="math inline"><em>g</em><sup>0</sup></span> is a root of <span class="math inline"><em>f</em>(<em>x</em>) − 1</span> we can deduce that <span class="math inline">(<em>x</em>−<em>g</em><sup>0</sup>)</span> is a factor of <span class="math inline"><em>f</em>(<em>x</em>) − 1</span> so <span class="math inline">(<em>x</em>−<em>g</em><sup>0</sup>)</span> is a divides <span class="math inline"><em>f</em>(<em>x</em>) − 1</span> which implies that the quotient <Latex>{`$\\dfrac{f(x)-1}{(x-g^0)}$`}</Latex> is a polynomial. As previously, the same can be done to the others constraints, so:</p>
                    <ul>
                        <li><p><Latex>{`$\\dfrac{f(x)-1}{(x-g^0)}$`}</Latex> is polynomial</p></li>
                        <li><p><Latex>{`$\\dfrac{f(x)-2338775057}{(x-g^{1022})}$`}</Latex> is polynomial</p></li>
                        <li><p><Latex>{`$\\dfrac{f(g^2\\cdot x)-f(g\\cdot x)^2 -f(x)^2}{\\prod\\limits_{i=0}^{1020}(x-g^i)}$`}</Latex> is polynomial</p></li>
                    </ul>
                    <p>The last item, creates a problem since <Latex>{`$\\prod\\limits_{i=0}^{1020}(x-g^i)$`}</Latex> is inefficient, so using a the fact that the powers of <span class="math inline"><em>g</em></span> form a subgroup of order <span class="math inline">1024</span> we have that <Latex>{`$x^{1024}-1=\\prod\\limits_{i=0}^{1023}(x-g^i)$`}</Latex>, because both sides are polynomials of degree 1024 whose roots are exactly the powers of <span class="math inline"><em>g</em></span>.<br />
                        So we can rewrite <Latex>{`$\\prod\\limits_{i=0}^{1020}(x-g^i)$`}</Latex> as <Latex>{`$\\dfrac{x^{1024}-1}{(x-g^{1021})(x-g^{1022})(x-g^{1023})}$`}</Latex></p>
                    <p>We end up with 3 rational functions:</p>
                    <ul>
                        <li><p><Latex>{`$p_0(x)=\\dfrac{f(x)-1}{(x-g^0)}$`}</Latex></p></li>
                        <li><p><Latex>{`$p_1(x)=\\dfrac{f(x)-2338775057}{(x-g^{1022})}$`}</Latex></p></li>
                        <li><p><Latex>{`$p_2(x)=\\dfrac{f(g^2\\cdot x)-f(g\\cdot x)^2 -f(x)^2}{\\dfrac{x^{1024}-1}{(x-g^{1021})(x-g^{1022})(x-g^{1023})}}$`}</Latex></p></li>
                    </ul>
                    <br></br><p>This set is used as constraints, if exists an <span class="math inline"><em>f</em></span> polynomial such that <span class="math inline"><em>p</em><sub>0</sub>, <em>p</em><sub>1</sub></span> and <span class="math inline"><em>p</em><sub>2</sub></span> are polynomial functions, then the original original statements are true.</p>
                    <p>In order to do it all at one, we create a linear combination of <span class="math inline"><em>p</em><sub>0</sub>, <em>p</em><sub>1</sub></span> and <span class="math inline"><em>p</em><sub>2</sub></span>.</p>
                    <p><span class="math display"><em>C</em><em>P</em> = <em>α</em><sub>0</sub> ⋅ <em>p</em><sub>0</sub> + <em>α</em><sub>1</sub> ⋅ <em>p</em><sub>1</sub> + <em>α</em><sub>2</sub> ⋅ <em>p</em><sub>2</sub></span></p>
                    <p>If this composition of polynomials is a polynomial then <span class="math inline"><em>p</em><sub>0</sub>, <em>p</em><sub>1</sub></span> and <span class="math inline"><em>p</em><sub>2</sub></span> are also polynomials.</p>
                    <p>So, we just need to commit the <span class="math inline"><em>C</em><em>P</em></span> using a Merkle Tree.</p>

                </h6>

                <div className='arrowsGroup'>
                    <Link to={`/zk_starks/tools_statements`}>
                        <ArrowButton dir="left"></ArrowButton>
                    </Link>
                    <Link to={`/zk_starks/fri`}>
                        <ArrowButton dir="right"></ArrowButton>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default PolynomialConstraints;