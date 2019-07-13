import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';

const Header = () => {

    return (
        <Container className="header">
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                     <img src="/etw-logo-dark-on-transparent.svg" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown title="Performance Solutions" id="solutions-nav-dropdown">
                            <NavDropdown.Item href="/performanceSolutions" className="dropdown-cap">
                                <img src="/winning-performance-icon.svg" />
                                <div className="dropdown-cap-text">
                                    <h4>Performance Solutions</h4>
                                    <p>Face your challenges head-on</p>
                                </div>
                            </NavDropdown.Item>
                            <Dropdown.Header>By outcome</Dropdown.Header>
                            <NavDropdown.Item href="#">Strengthen culture</NavDropdown.Item>
                            <NavDropdown.Item href="#">Accelerate growth</NavDropdown.Item>
                            <Dropdown.Header>By solution</Dropdown.Header>
                            <NavDropdown.Item href="#">Leadership development</NavDropdown.Item>
                            <NavDropdown.Item href="#">Goal definition and reporting</NavDropdown.Item>
                            <NavDropdown.Item href="#">Behavior and process design</NavDropdown.Item>
                            <NavDropdown.Item href="#">Performance delivery</NavDropdown.Item>
                            <Dropdown.Header>Dig deeper</Dropdown.Header>
                            <NavDropdown.Item href="#">Why ETW</NavDropdown.Item>
                            <NavDropdown.Item href="#">Clients</NavDropdown.Item>
                            <NavDropdown.Item href="#">Pricing</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Leadership Resources" id="leadership-nav-dropdown">
                            <NavDropdown.Item href="/leadershipResources" className="dropdown-cap">
                                <img src="/winning-performance-icon.svg" />
                                <div className="dropdown-cap-text">
                                    <h4>Leadership resources</h4>
                                    <p>Get equipped for intentional building</p>
                                </div>
                            </NavDropdown.Item>
                            <Dropdown.Header>Popular</Dropdown.Header>
                            <NavDropdown.Item href="#">
                                Intentional leadership score
                                <Badge pill variant="info" className="ml-2">5 Min</Badge>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">What is the most important number?</NavDropdown.Item>
                            <NavDropdown.Item href="#">Best habits to strengthen culture</NavDropdown.Item>
                            <NavDropdown.Item href="#">2019 state of international leadership</NavDropdown.Item>
                            <NavDropdown.Item href="#">About the ETW approach</NavDropdown.Item>
                            <Dropdown.Header>Learn more</Dropdown.Header>
                            <NavDropdown.Item href="#">Articles</NavDropdown.Item>
                            <NavDropdown.Item href="#">White papers</NavDropdown.Item>
                            <NavDropdown.Item href="#">Fact sheets</NavDropdown.Item>
                            <NavDropdown.Item href="#">Checklists</NavDropdown.Item>
                            <NavDropdown.Item href="#">Case studies</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="More" id="more-nav-dropdown">
                            <NavDropdown.Item className="dropdown-cap">
                                <img src="/winning-performance-icon.svg" />
                                <div className="dropdown-cap-text">
                                    <h4>More</h4>
                                    <p>Explore our intentional culture</p>
                                </div>
                            </NavDropdown.Item>
                            <Dropdown.Header>Our company</Dropdown.Header>
                            <NavDropdown.Item href="#">About ETW</NavDropdown.Item>
                            <NavDropdown.Item href="#">Our Story</NavDropdown.Item>
                            <NavDropdown.Item href="#">How we give back</NavDropdown.Item>
                            <NavDropdown.Item href="#">Careers</NavDropdown.Item>
                            <NavDropdown.Item href="#">Partners</NavDropdown.Item>
                            <NavDropdown.Item href="#">Contact us</NavDropdown.Item>
                        </NavDropdown>
                        <Button variant="primary" className="navbar-button" href="/">Join a Webinar</Button>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
};

export default Header;
