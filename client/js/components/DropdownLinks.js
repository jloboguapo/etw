import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

const DropdownLinks = ({ link }) => {
  const toHeaderGroup = group => {
    return (
      <span key={group.fields.title}>
        <Dropdown.Header>{group.fields.title}</Dropdown.Header>
        {group.fields.submenuItems.map(toItem)}
      </span>
    );
  };

  const toItem = item => (
    <NavDropdown.Item
      href={item.fields.href}
      key={item.fields.title}
      className={item.fields.className ? item.fields.className : ''}
    >
      {item.fields.title}
      <Badge pill variant="info" className="ml-2">
        {item.fields.badge}
      </Badge>
    </NavDropdown.Item>
  );

  return (
    <NavDropdown
      title={link.fields.title}
      id={`${link.fields.title}NavDropdown`}
    >
      <NavDropdown.Item href="/performanceSolutions" className="dropdown-cap">
        <img src="/winning-performance-icon.svg" />
        <div className="dropdown-cap-text">
          <h4>{link.fields.title}</h4>
          <p>{link.fields.subtitle}</p>
        </div>
      </NavDropdown.Item>
      {link.fields.menu && link.fields.menu.map(toHeaderGroup)}
    </NavDropdown>
  );
};

DropdownLinks.propTypes = {
  link: PropTypes.shape({
    fields: PropTypes.shape({
      title: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
    })
  }).isRequired
};

export default DropdownLinks;
