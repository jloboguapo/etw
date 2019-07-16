import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CallToAction from './CallToAction';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const CarouselListener = () => {
  const [centerMode, setCenterMode] = useState(
    !window.matchMedia('(max-width: 768px)').matches
  );

  const resizeEvent = () =>
    setCenterMode(!window.matchMedia('(max-width: 768px)').matches);

  useEffect(() => {
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);

  return (
    <Carousel
      centerMode={centerMode}
      centerSlidePercentage={
        window.matchMedia('(max-width: 768px)').matches ? 80 : 39
      }
      selectedItem={1}
      showThumbs={false}
    >
        <Card className="insight-card">
            <div className="card-img-bg" style={{ backgroundImage: `url("/phone-on-desk.svg")` }}>
                <Badge pill variant="info">Category</Badge>
            </div>
            <Card.Body>
                <Card.Title>
                    <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
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
            <div className="card-img-bg" style={{ backgroundImage: `url("/tower.svg")` }}>
                <Badge pill variant="info">Category</Badge>
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
          style={{ backgroundImage: `url("/tower.svg")` }}
        >
          <Badge pill variant="info">
            Category
          </Badge>
        </div>
        <Card.Body>
          <Card.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pretium mauris nec aliquam porttitor.
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
          style={{ backgroundImage: `url("/typing-hands.svg")` }}
        >
          <Badge pill variant="info">
            Category
          </Badge>
        </div>
        <Card.Body>
          <Card.Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pretium mauris nec aliquam porttitor.
          </Card.Title>
          <CallToAction
            linkUrl="/"
            linkName="call to action"
            arrowClassName="arrow-svg"
            source="arrow.svg"
          />
        </Card.Body>
      </Card>
  </Carousel>
  );
};

export default CarouselListener;
