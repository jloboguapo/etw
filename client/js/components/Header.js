import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar, { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import DropdownLinks from './DropdownLinks';
import { useContentful } from '../utils/customHooks';
import ButtonUp from './Button';
import BannerButton from './BannerButton';

const Header = props => {
  const [headerLinks, setHeaderLinks] = useState([]);
  const [button, setButton] = useState('');
  const [logo, setLogo] = useState('');
  const bannerButtonContent = useSelector(state => state.bannerButtonContent);
  const client = useContentful();

  const fetchData = async () => {
    const response = await client.getEntries({
      include: 10,
      content_type: 'header'
    });

    setLogo(response.includes.Asset[0].fields.file.url);
    setHeaderLinks(response.items[0].fields.dropdownMenu);
    setButton(response.items[0].fields.button.fields);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {bannerButtonContent && <BannerButton content={bannerButtonContent} />}
      <Container className="header">
        <Navbar expand="lg">
          <Brand href="/">
            <img src={logo} />
          </Brand>
          <Toggle aria-controls="basic-navbar-nav" />
          <Collapse id="basic-navbar-nav">
            <Nav>
              {headerLinks.map(link => {
                return (
                  <DropdownLinks
                    key={link.sys.id}
                    link={link}
                    button={button}
                  />
                );
              })}
              <ButtonUp
                variant="primary"
                className="navbar-button"
                content={button.text}
                href={button.href}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </>
  );
};

Header.propTypes = {};

export default Header;
