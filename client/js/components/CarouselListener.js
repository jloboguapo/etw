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

  useEffect(() => {
    const resizeEvent = () =>
      setCenterMode(!window.matchMedia('(max-width: 768px)').matches);
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
            <div className="card-img-bg" style={{ backgroundImage: `url("/typing-hands.svg")` }}>
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
            <div className="card-img-bg" style={{ backgroundImage: `url("/laptop-angle.svg")` }}>
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

  </Carousel>
      // <div>
      //   <div className="etw-resources-row">
      //     <div className="image-content-wrapper">
      //       <ImageWithPill imageClass="camera-desert" />
      //       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      //       <CallToAction
      //         linkUrl="/"
      //         linkName="call to action"
      //         arrowClassName="arrow"
      //         source="arrow.svg"
      //       />
      //     </div>
      //   </div>
      //   <p className="legend">Legend 1</p>
      // </div>
      // <div>
      //   <div className="etw-resources-row">
      //     <div className="image-content-wrapper">
      //       <ImageWithPill imageClass="photo-mountain" />
      //       <h3>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      //         pretium mauris nec aliquam porttitor.
      //       </h3>
      //       <CallToAction
      //         linkUrl="/"
      //         linkName="call to action"
      //         arrowClassName="arrow"
      //         source="arrow.svg"
      //       />
      //     </div>
      //   </div>
      //   <p className="legend">Legend 2</p>
      // </div>
      // <div>
      //   <div className="etw-resources-row">
      //     <div className="image-content-wrapper">
      //       <ImageWithPill imageClass="modern-desk" />
      //       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      //       <CallToAction
      //         linkUrl="/"
      //         linkName="call to action"
      //         arrowClassName="arrow"
      //         source="arrow.svg"
      //       />
      //     </div>
      //   </div>
      //   <p className="legend">Legend 3</p>
      // </div>
      // <div>
      //   <div className="etw-resources-row">
      //     <div className="image-content-wrapper">
      //       <ImageWithPill imageClass="hustle" />
      //       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      //       <CallToAction
      //         linkUrl="/"
      //         linkName="call to action"
      //         arrowClassName="arrow"
      //         source="arrow.svg"
      //       />
      //     </div>
      //   </div>
      //   <p className="legend">Legend 4</p>
      // </div>
      // <div>
      //   <div className="etw-resources-row">
      //     <div className="image-content-wrapper">
      //       <ImageWithPill imageClass="horse-race" />
      //       <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      //       <CallToAction
      //         linkUrl="/"
      //         linkName="call to action"
      //         arrowClassName="arrow"
      //         source="arrow.svg"
      //       />
      //     </div>
      //   </div>
      //   <p className="legend">Legend 5</p>
      // </div>
  );
};

export default CarouselListener;
