import React from 'react';
import Subscribe from './Subscribe';
import CallToAction from './CallToAction';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Badge from 'react-bootstrap/Badge';

const Insights = props => {
  return (
    <div className="bg-secondary py-8 py-lg-11">
      <Container className="insights-wrapper">
        <Row className="justify-content-md-center text-center">
          <Col lg={8}>
            <h2 className="mb-7">Growth-driving insights</h2>
            <Subscribe />
          </Col>
        </Row>

        <div className="insights-card-container mt-8 mt-lg-11">
          <CardDeck>
            <Card className="insight-card">
              <div
                className="card-img-bg"
                style={{ backgroundImage: `url("/phone-on-desk.svg")` }}
              >
                <Badge pill variant="info">
                  Category
                </Badge>
              </div>
              <Card.Body>
                <Card.Title as="a" href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Card.Title>
                <CallToAction
                  linkUrl="/"
                  linkName="call to action"
                  arrowClassName="arrow-svg"
                  source="arrow.svg"
                />
              </Card.Body>
            </Card>
            <Card className="insight-card">
              <div
                className="card-img-bg"
                style={{ backgroundImage: `url("/tower.svg")` }}
              >
                <Badge pill variant="info">
                  Category
                </Badge>
              </div>
              <Card.Body>
                <Card.Title>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pretium mauris nec aliquam porttitor.
                </Card.Title>
                <CallToAction
                  linkUrl="/"
                  linkName="call to action"
                  arrowClassName="arrow-svg"
                  source="arrow.svg"
                />
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card className="insight-card card-lg">
              <div
                className="card-img-bg"
                style={{ backgroundImage: `url("/typing-hands.svg")` }}
              >
                <Badge pill variant="info">
                  Category
                </Badge>
              </div>
              <Card.Body>
                <Card.Title>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pretium mauris nec aliquam porttitor.
                </Card.Title>
                <CallToAction
                  linkUrl="/"
                  linkName="call to action"
                  arrowClassName="arrow-svg"
                  source="arrow.svg"
                />
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card className="insight-card">
              <div
                className="card-img-bg"
                style={{ backgroundImage: `url("/laptop-angle.svg")` }}
              >
                <Badge pill variant="info">
                  Category
                </Badge>
              </div>
              <Card.Body>
                <Card.Title>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus pretium mauris nec aliquam porttitor.
                </Card.Title>
                <CallToAction
                  linkUrl="/"
                  linkName="call to action"
                  arrowClassName="arrow-svg"
                  source="arrow.svg"
                />
              </Card.Body>
            </Card>
            <Card className="testimonial-card">
              <Card.Body>
                <div className="testimonial-quote">
                  <blockquote>
                    <p>
                      ETW has made all the difference in our performance. They
                      are our secret sauce.
                    </p>
                    <footer className="blockquote-footer">
                      high-performance client name
                    </footer>
                  </blockquote>
                </div>
                <div className="testimonial-cta">
                  <Button href="#" variant="primary" className="mb-3">
                    JOIN our next webinar
                  </Button>
                  <p>
                    Every Tuesday, Thursday, and Friday, designed for C-level
                    leaders like you.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>

          <p className="text-center mt-9 mb-0">
            <CallToAction
              linkUrl="/"
              linkName="More insights"
              arrowClassName="arrow-svg"
              source="arrow.svg"
            />
          </p>
        </div>
      </Container>
    </div>
  );

  //   <div className="etw-insights-ultimate-container">
  //     <div className="etw-insights-main-container">
  //       <div className="etw-insights-text-container">
  //         <h2>Growth-driving insights</h2>
  //         <Subscribe />
  //         <p>
  //           {' '}
  //           By subscribing, you agree to our <a href="/">privacy policy.</a>
  //         </p>
  //       </div>
  //       <div className="etw-insights-card-container">
  //         <div className="etw-insights-row">
  //           <div className="image-content-wrapper">
  //             <ImageWithPill imageClass="phone-on-desk" />
  //             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
  //             <CallToAction
  //               linkUrl="/"
  //               linkName="call to action"
  //               arrowClassName="arrow"
  //               source="arrow.svg"
  //             />
  //           </div>
  //           <div className="image-content-wrapper">
  //             <ImageWithPill imageClass="tower" />
  //             <h3>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
  //               pretium mauris nec aliquam porttitor.
  //             </h3>
  //             <CallToAction
  //               linkUrl="/"
  //               linkName="call to action"
  //               arrowClassName="arrow"
  //               source="arrow.svg"
  //             />
  //           </div>
  //         </div>
  //         <div className="etw-insights-row">
  //           <div className="image-content-wrapper full-width">
  //             <ImageWithPill imageClass="typing-hands" />
  //             <h2>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
  //               pretium mauris nec aliquam porttitor.
  //             </h2>
  //             <CallToAction
  //               linkUrl="/"
  //               linkName="call to action"
  //               arrowClassName="arrow"
  //               source="arrow.svg"
  //             />
  //           </div>
  //         </div>
  //         <div className="etw-insights-row">
  //           <div className="image-content-wrapper">
  //             <ImageWithPill imageClass="laptop-angle" />
  //             <h3>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
  //               pretium mauris nec aliquam porttitor.
  //             </h3>
  //             <CallToAction
  //               linkUrl="/"
  //               linkName="call to action"
  //               arrowClassName="arrow"
  //               source="arrow.svg"
  //             />
  //           </div>
  //           <div className="insights-category-container-5">
  //             <img className="quote" src="/quote.svg" />
  //             <p className="etw-client-quote">
  //               ETW has made all the difference in our performance. They are our
  //               secret sauce.
  //             </p>
  //             <h5>high-performance client name</h5>
  //             <a className="button-link" href="/">
  //               <Button content="JOIN our next webinar" />
  //             </a>
  //             <p>
  //               Every Tuesday, Thursday, and Friday, designed for C-level
  //               leaders like you.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <CallToAction
  //         linkUrl="/"
  //         linkName="more insights"
  //         arrowClassName="arrow"
  //         source="arrow.svg"
  //       />
  //     </div>
  //   </div>
  // );
};

export default Insights;
