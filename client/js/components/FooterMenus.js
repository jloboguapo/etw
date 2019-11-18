import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const FooterMenus = ({ link, index }) => {
  const toHeaderGroup = group => {
    return (
      <span key={group.fields.title}>
        <h5>{group.fields.title}</h5>
        <ul className="list-unstyled">
          {group.fields.submenuItems.map(toItem)}
        </ul>
      </span>
    );
  };

  const toItem = item => (
    <li
      key={item.sys.id}
      className={item.fields.className ? item.fields.className : ''}
    >
      <a href={item.fields.href}>{item.fields.title}</a>
    </li>
  );

  return (
    <Col xs={6} lg={3} id={`${link.fields.title}ul`}>
      {index || index + 1 ? (
        <h3>{link.fields.title}</h3>
      ) : (
        <h4 className="mt-7 mt-lg-0">{link.fields.title}</h4>
      )}
      <p>{link.fields.subtitle}</p>
      {link.fields.menu.map(toHeaderGroup)}
    </Col>
  );
};

FooterMenus.propTypes = {
  link: PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
    })
  }).isRequired
};

export default FooterMenus;
