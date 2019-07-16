import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Header as DropdownHeader } from 'react-bootstrap/Dropdown';
import Navbar, { Brand, Toggle, Collapse } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown, { Item } from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
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
    console.log(response);

    setLogo(response.includes.Asset[0].fields.file.url);
    setHeaderLinks(response.items[0].fields.dropdownMenu);
    setButton(response.items[0].fields.button);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(headerLinks);
  //getEntry('7b09buh97lZKb2WHgOSQEL');

  const toDropdownLinks = (link, key) => {
    return <DropdownLinks key={ key } link={ link } />
  }

  return (
    <Container className="header">
      <Navbar expand="lg">
        <Brand href="/">
          <img src={logo} />
        </Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav>
            {headerLinks.map(link => (
              <DropdownLinks key={link} link={link} />
            ))}

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

function save() {
  return (
    <Container className="header">
      <Navbar expand="lg">
        <Brand href="/">
          <img src="/etw-logo-dark-on-transparent.svg" />
        </Brand>
        <Toggle aria-controls="basic-navbar-nav" />
        <Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title={headerLinks[0]} id="solutions-nav-dropdown">
              <Item href="/performanceSolutions" className="dropdown-cap">
                <img src="/winning-performance-icon.svg" />
                <div className="dropdown-cap-text">
                  <h4>Performance Solutions</h4>
                  <p>Face your challenges head-on</p>
                </div>
              </Item>
              <DropdownHeader>By outcome</DropdownHeader>
              <Item href="/performanceSolutions">Strengthen culture</Item>
              <Item href="/performanceSolutions">Accelerate growth</Item>
              <DropdownHeader>By solution</DropdownHeader>
              <Item href="/performanceSolutions">Leadership development</Item>
              <Item href="/performanceSolutions">
                Goal definition and reporting
              </Item>
              <Item href="/performanceSolutions">
                Behavior and process design
              </Item>
              <Item href="/performanceSolutions">Performance delivery</Item>
              <DropdownHeader>Dig deeper</DropdownHeader>
              <Item href="/performanceSolutions">Why ETW</Item>
              <Item href="/performanceSolutions">Clients</Item>
              <Item href="/performanceSolutions">Pricing</Item>
            </NavDropdown>
            <NavDropdown title={headerLinks[1]} id="leadership-nav-dropdown">
              <Item href="/leadershipResources" className="dropdown-cap">
                <img src="/winning-performance-icon.svg" />
                <div className="dropdown-cap-text">
                  <h4>Leadership resources</h4>
                  <p>Get equipped for intentional building</p>
                </div>
              </Item>
              <DropdownHeader>Popular</DropdownHeader>
              <Item href="/leadershipResources">
                Intentional leadership score
                <Badge pill variant="info" className="ml-2">
                  5 Min
                </Badge>
              </Item>
              <Item href="/leadershipResources">
                What is the most important number?
              </Item>
              <Item href="/leadershipResources">
                Best habits to strengthen culture
              </Item>
              <Item href="/leadershipResources">
                2019 state of international leadership
              </Item>
              <Item href="/leadershipResources">About the ETW approach</Item>
              <DropdownHeader>Learn more</DropdownHeader>
              <Item href="/leadershipResources">Articles</Item>
              <Item href="/leadershipResources">White papers</Item>
              <Item href="/leadershipResources">Fact sheets</Item>
              <Item href="/leadershipResources">Checklists</Item>
              <Item href="/leadershipResources">Case studies</Item>
            </NavDropdown>
            <NavDropdown title={headerLinks[2]} id="more-nav-dropdown">
              <Item className="dropdown-cap">
                <img src="/winning-performance-icon.svg" />
                <div className="dropdown-cap-text">
                  <h4>More</h4>
                  <p>Explore our intentional culture</p>
                </div>
              </Item>
              <DropdownHeader>Our company</DropdownHeader>
              <Item href="#">About ETW</Item>
              <Item href="#">Our Story</Item>
              <Item href="#">How we give back</Item>
              <Item href="#">Careers</Item>
              <Item href="#">Partners</Item>
              <Item href="#">Contact us</Item>
            </NavDropdown>
            <Button variant="primary" className="navbar-button" href="/">
              {button}
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

const blah = [
  {
    navTitle: '',
    content: [
      {
        headerTitle: 'By outcome',
        items: [
          { href: '/performancesolutions', title: 'Strengthen culture' },
          { href: '/performancesolutions', title: 'Accelerate growth' }
        ]
      },
      {
        headerTitle: 'By solution',
        items: [
          { href: '/performancesolutions', title: 'Leadership development' },
          {
            href: '/performancesolutions',
            title: 'Goal definition and reporting'
          },
          {
            href: '/performancesolutions',
            title: 'Behavior and process design'
          },
          { href: '/performancesolutions', title: 'Performance delivery' }
        ]
      },
      {
        headerTitle: 'Dig deeper',
        items: [
          { href: '/performancesolutions', title: 'Why ETW' },
          { href: '/performancesolutions', title: 'Clients' },
          { href: '/performancesolutions', title: 'Pricing' }
        ]
      }
    ]
  }
];
