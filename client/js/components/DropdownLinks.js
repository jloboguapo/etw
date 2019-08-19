import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Dropdown } from 'react-bootstrap';
import NavDropdown, { Item } from 'react-bootstrap/NavDropdown';
import ButtonUp from './Button';

const DropdownLinks = ({ link }) => {
  const url = link.fields.image.fields.file.url;
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
      key={item.fields.title || item.fields.text}
      className={item.fields.className ? item.fields.className : ''}
    >
      {item.fields.title || (
        <ButtonUp content={item.fields.text} style={{ width: '100%' }} />
      )}
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
      <Item href={link.fields.href} className="dropdown-cap">
        {url && <img src={url} />}
        <div className="dropdown-cap-text">
          <h4>{link.fields.title}</h4>
          <p>{link.fields.subtitle}</p>
        </div>
      </Item>
      {link.fields.menu.map(toHeaderGroup)}
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
