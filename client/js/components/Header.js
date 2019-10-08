import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar, { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import DropdownLinks from './DropdownLinks';
import ButtonUp from './Button';
import MessageBanner from './MessageBanner';
import { setExpandedState } from '../actionCreators';

const Header = props => {
  const dispatch = useDispatch();
  const setExpanded = () => dispatch(setExpandedState(!expandedState));
  const expandedState = useSelector(state => state.expandedState);

  const { dropdownMenu, logo, button } = props;
  const messageBannerContent = useSelector(state => state.messageBannerContent);

  const hashChanged = () => {
    dispatch(setExpandedState(false));
  };

  window.addEventListener('hashchange', hashChanged);

  return (
    <>
      {messageBannerContent && <MessageBanner content={messageBannerContent} />}
      <Container className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          onToggle={() => setExpanded()}
          expanded={expandedState}
        >
          <Brand href="/">{logo && <img src={logo.fields.file.url} />}</Brand>
          <Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => {
              setExpanded();
            }}
          />
          <Collapse id="basic-navbar-nav">
            <Nav>
              {dropdownMenu.map(link => {
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
                content={button.fields.text}
                href={button.fields.href}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </>
  );
};

Header.propTypes = {
  dropdownMenu: PropTypes.array.isRequired,
  logo: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired
};

export default Header;
