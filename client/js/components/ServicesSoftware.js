import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const ServicesSoftware = () => {
  return (
    <Container className="services-software-container py-8 py-lg-11">
        <Row className="justify-content-lg-center text-lg-center mb-10">
            <Col lg={8}>
                <h2>People-powered brains backed by platform-powered brawn</h2>
                <p className="lead">Technology alone cannot solve for the complex challenges that C-leaders like you face daily. That's why each of ETW's culture-strengthening solutions are composed of both services and software to deliver the outcomes you crave.</p>
            </Col>
        </Row>

        <Row className="text-lg-center mb-8 mb-lg-10">
            <Col lg={{ span: 4, offset: 2 }} className="mb-5 mb-lg-0">
                <img src="/strategic-services.svg" className="mb-5" />
                <h4>Strategic services</h4>
                <p>
                    Workshops, coaching, implementation, and consulting are the
                    people-powered services you need to strengthen culture.
                </p>
            </Col>
            <Col lg={4}>
                <img src="/enterprise-software.svg" className="mb-5" />
                <h4>Enterprise software</h4>
                <p>
                    Assess and monitor your workforce's competencies with Drive, ETW's{' '}
                    <a href="#" className="text-info">leadership development software</a>.
                </p>
            </Col>
        </Row>

        <Card className="testimonial-card">
            <Card.Body>
                <Row>
                    <Col lg="5" className="testimonial-cta mb-4 mb-lg-0">
                        <Button href="#" variant="primary" className="mb-3">Join our next webinar</Button>
                        <p>Every Tuesday, Thursday, and Friday, designed for C-level leaders like you.</p>
                    </Col>
                    <Col className="testimonial-quote">
                        <blockquote>
                            <p>ETW has made us far more productive because now we focus on the key things that drive results for our company.</p>
                            <footer className="blockquote-footer">Joe Grygiel, Air EVAC Lifeteam</footer>
                        </blockquote>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
);


  //   <div className="etw-ss-ultimate-container">
  //     <div className="etw-ss-main-container">
  //       <div className="etw-ss-text-container">
  //         <h2>People-powered brains backed by platform-powered brawn</h2>
  //         <p>
  //           Technology alone cannot solve for the complex challenges that
  //           C-leaders like you face daily. That's why each of ETW's
  //           culture-strengthening solutions are composed of both services and
  //           software to deliver the outcomes you crave.
  //         </p>
  //         <br />
  //       </div>
  //       <div className="etw-ss-card-container">
  //         <div className="services-card">
  //           <img
  //             className="strategic-services-card-icon"
  //             src="/strategic-services.svg"
  //           />
  //           <h4>Strategic services</h4>
  //           <p>
  //             Workshops, coaching, implementation, and consulting are the
  //             people-powered services you need to strengthen culture.
  //           </p>
  //         </div>
  //         <div className="software-card">
  //           <img
  //             className="enterprise-software-card-icon"
  //             src="/enterprise-software.svg"
  //           />
  //           <h4>Enterprise software</h4>
  //           <p>
  //             Assess and monitor your workforce's competencies with Drive, ETW's{' '}
  //             <span>leadership development software</span>.
  //           </p>
  //         </div>
  //       </div>
  //       <div className="ss-testimonial-container">
  //         <div className="ss-testimonial-container-left">
  //           <a className="button-link" href="/">
  //             <Button content="Join our next webinar" />
  //           </a>
  //           <p>
  //             Every Tuesday, Thursday, and Friday, designed for C-level leaders
  //             like you.
  //           </p>
  //         </div>
  //         <div className="ss-testimonial-container-right">
  //           <img className="quote" src="/quote.svg" />
  //           <p>
  //             ETW has made us far more productive because now we focus on the
  //             key things that drive results for our company.
  //           </p>
  //           <h5>Joe Grygiel, Air EVAC Lifeteam</h5>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ServicesSoftware;
