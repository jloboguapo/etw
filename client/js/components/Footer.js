import React from 'react';
import Subscribe from './Subscribe';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div className="bg-light">
        <Container className="footer-main-container py-8">
            <Row className="footer-top-container">
                <Col lg={6} className="company-description-container">
                    <img className="logo" src="/etw-logo-dark-on-transparent.svg" />
                    <p>
                        Execute to Win (ETW) is the Intentional Leadership Platform that high-performance organizations trust to strengthen culture and accelerate growth.
                        {' '}
                        <strong><a href="/" className="text-nowrap">Learn more about us</a></strong>.
                    </p>
                </Col>
                <Col lg={6} className="footer-input-container">
                    <p className="lead">Get leadership resources in your inbox</p>
                    <Subscribe />
                </Col>
            </Row>

            <Row className="footer-links-container">
                <Col xs={6} lg={3}>
                    <h3>About</h3>
                    <p>Learn more about ETW and our intentional culture.</p>
                    <h5>Company</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">About ETW</a></li>
                        <li><a href="/">Our story</a></li>
                        <li><a href="/">How we give back</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Partners</a></li>
                        <li><a href="/">Contact us</a></li>
                    </ul>
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><a href="tel:4806389300" className="text-nowrap">480.638.9300</a></li>
                        <li>25 South Arizona Place</li>
                        <li>Suite 510</li>
                        <li>Chandler, AZ 85225</li>
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h3>Solutions</h3>
                    <p>Face your enterprise-level challenges head-on.</p>
                    <h5>By outcome</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Strengthen Culture</a></li>
                        <li><a href="/">Accelerate Growth</a></li>
                    </ul>
                    <h5>By solution</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Leadership development</a></li>
                        <li><a href="/">Goal definition and reporting</a></li>
                        <li><a href="/">Behvior and process design</a></li>
                        <li><a href="/">Performance delivery</a></li>
                    </ul>
                    <h5>Dig Deeper</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Why ETW</a></li>
                        <li><a href="/">Clients</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h4 className="mt-7 mt-lg-0">Resources</h4>
                    <p>Get equipped for intentional culture-building.</p>
                    <h5>Support</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Frequently asked questions</a></li>
                        <li><a href="/">Support Center</a></li>
                        <li><a href="/">Developer docs</a></li>
                    </ul>
                    <h5>Leadership Resources</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">Assessments</a></li>
                        <li><a href="/">Case studies</a></li>
                        <li><a href="/">Checklists</a></li>
                        <li><a href="/">Fact sheets</a></li>
                        <li><a href="/">White papers</a></li>
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h4 className="mt-7 mt-lg-0">Features</h4>
                    <p>Explore the ETW platform and its enterprise functionality.</p>
                    <h5>Leadership development software</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Drive product tour</a></li>
                        <li><a href="/">Talent gap reports</a></li>
                        <li><a href="/">Development paths</a></li>
                        <li><a href="/">Competency reviews</a></li>
                    </ul>
                    <h5>Priority execution software</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Align product tour</a></li>
                        <li><a href="/">Goal management</a></li>
                        <li><a href="/">Plan management</a></li>
                        <li><a href="/">Progress dashboards</a></li>
                    </ul>
                    <h5>Take action</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Request a demo</a></li>
                    </ul>
                </Col>
            </Row>

            <Row className="footer-baseline-container">
                <Col xl={8}>
                    <ul className="list-inline">
                        <li className="list-inline-item">&copy; 2019 Execute to Win Inc.<span> All rights reserved.</span></li>
                        <li className="list-inline-item"><a href="#">Terms of use</a></li>
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        <li className="list-inline-item global"><a href="#">Global privacy compliance</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul className="list-inline footer-baseline-social">
                        <li className="list-inline-item"><a href="/"><img src="/facebook.svg" /></a></li>
                        <li className="list-inline-item"><a href="/"><img src="/linkedin.svg" /></a></li>
                        <li className="list-inline-item"><a href="/"><img src="/twitter.svg" /></a></li>
                        <li className="list-inline-item"><a href="/"><img src="/instagram.svg" /></a></li>
                        <li className="list-inline-item"><a href="/"><img src="/medium.svg" /></a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Footer;
