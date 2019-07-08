import React from 'react';
import Container from 'react-bootstrap/Container';

const LogosBanner = () => {
  return (
    <div className="logos">
      <Container>
        <h4>Intentional cultures both big and small leverage us to win</h4>
        <div className="logos-list">
          <img className="trip-spark-logo" src="/trip-spark-logo.svg" />
          <img className="univar-logo" src="/univar-logo.svg" />
          <img className="verra-mobility-logo" src="/verra-mobility-logo.svg" />
        </div>
    </Container>
    </div>
  );
};

export default LogosBanner;
