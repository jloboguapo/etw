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
                  <Button href="#" variant="primary" className="mt-lg-5 mb-3">
                    Join our next webinar
                  </Button>
                  <p className="px-lg-8">
                    Every Tuesday, Thursday, and Friday, designed for C-level
                    leaders like you.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>

          <p className="text-center mb-0">
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
};

export default Insights;
