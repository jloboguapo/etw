import React from 'react';
import _isEmpty from 'lodash.isempty';
import Subscribe from './Subscribe';
import { Col, Container, Row } from 'react-bootstrap';
import FooterMenus from './FooterMenus';

const Footer = props => {
  const {
    about,
    baselineLinks,
    copyright,
    span,
    learnLink,
    links,
    logo,
    socialLinks,
    subscribe,
    text
  } = props;

  const renderBaselineLinks = link => {
    const { name, href, text } = link.fields;

    return (
      <li
        key={name}
        className={
          name === 'global' ? 'list-inline-item global' : 'list-inline-item'
        }
      >
        <a href={href}>{text}</a>
      </li>
    );
  };

  const renderImageLink = link => {
    const { name, href, image } = link.fields;

    return (
      <li key={name} className="list-inline-item">
        <a href={href}>{image && <img src={image.fields.file.url} />}</a>
      </li>
    );
  };

  return (
    <div className="bg-light">
      <Container className="footer-main-container py-8">
        <Row className="footer-top-container">
          <Col lg={6} className="company-description-container">
            {logo && <img src={logo.fields.file.url} />}
            <p>
              {about}
              <strong>
                <a href={learnLink.fields.href} className="text-nowrap">
                  {learnLink.fields.text}
                </a>
              </strong>
            </p>
          </Col>
          <Col lg={6} className="footer-input-container">
            <p className="lead">{text}</p>
            {subscribe && <Subscribe {...subscribe[0].fields} />}
          </Col>
        </Row>
        <Row className="footer-links-container">
          {links.map(link => {
            return <FooterMenus key={link.sys.id} link={link} />;
          })}
        </Row>
        <Row className="footer-baseline-container">
          <Col xl={8}>
            <ul className="list-inline">
              <li className="list-inline-item">
                {copyright}
                <span>{' ' + span}</span>
              </li>
              {!_isEmpty(baselineLinks) &&
                baselineLinks.map(renderBaselineLinks)}
            </ul>
          </Col>
          <Col>
            <ul className="list-inline footer-baseline-social">
              {!_isEmpty(socialLinks) && socialLinks.map(renderImageLink)}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
