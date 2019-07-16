import React from 'react';
import PropTypes from 'prop-types';
import { Header as DropdownHeader } from 'react-bootstrap/Dropdown';
import NavDropdown, { Item } from 'react-bootstrap/NavDropdown';

const DropdownLinks = ({ link }) => {
  const renderHeaderGroup = obj => (
    <span key={obj.headerTitle}>
      <DropdownHeader>{obj.headerTitle}</DropdownHeader>
      {obj.items.map(item => renderItems(item))}
    </span>
  );
  
  const renderItems = item => (
    <Item
      href={item.href}
      key={item.title}
      className={item.className ? item.className : ''}
    >
      {item.title}
    </Item>
  );

  return (
    <NavDropdown title={link.navTitle} id={`${link.navTitle}NavDropdown`}>
      <Item href="/performanceSolutions" className="dropdown-cap">
        <img src="/winning-performance-icon.svg" />
        <div className="dropdown-cap-text">
          <h4>Performance Solutions</h4>
          <p>Face your challenges head-on</p>
        </div>
      </Item>
      {link.content.map(obj => renderHeaderGroup(obj))}
    </NavDropdown>
  );
};

DropdownLinks.propTypes = {
  link: PropTypes.shape({
    navTitle: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
  }).isRequired
};

export default DropdownLinks;
