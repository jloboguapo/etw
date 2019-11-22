import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
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

  const linkReload = e => {
    if (location.href !== e.currentTarget.href) {
      location.href = e.currentTarget.href;
      location.reload(true)();
    }
    dispatch(setExpandedState(false));
    window.scrollTo(0, 0);
  };

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
              <Button
                className="navbar-button"
                href={button.fields.href}
                variant="primary"
                onClick={e => {
                  linkReload(e);
                }}
              >
                {button.fields.text}
              </Button>
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
