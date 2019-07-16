import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar, { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import DropdownLinks from './DropdownLinks';
import { useContentful } from '../utils/customHooks';

const Header = () => {
  const [headerLinks, setHeaderLinks] = useState([]);
  const [button, setButton] = useState('');
  const [logo, setLogo] = useState('');

  const client = useContentful();

  const fetchData = async () => {
    const response = await client.getEntries({
      include: 10,
      content_type: 'heading'
    });

    setLogo(response.includes.Asset[0].fields.file.url);
    setHeaderLinks(response.items[0].fields.dropdownMenu);
    setButton(response.items[0].fields.button);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="header">
      <Navbar expand="lg">
        <Brand href="/">
          <img src={logo} />
        </Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav>
            {headerLinks.map(link => {
              return <DropdownLinks key={link.sys.id} link={link} />;
            })}
            <Button variant="primary" className="navbar-button" href="/">
              {button}
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
