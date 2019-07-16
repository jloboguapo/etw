import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';

const DropdownLinks = ({ link }) => {

	const toHeaderGroup = group => {
		return (
			<span key={ group.fields.navTitle }>
				<Dropdown.Header>{ group.fields.navTitle }</Dropdown.Header>
				{
					group.fields.submenuItems && group.fields.submenuItems.map(toItem)
				}
			</span>
		);
	}
	
	const toItem = item => (
		<NavDropdown.Item
			href={ item.fields.href }
			key={ item.fields.title }
			className={ item.fields.className ? item.fields.className : '' }
		>
			{ item.fields.title }
		</NavDropdown.Item>
	);

	return (
		<NavDropdown title={link.fields.title} id={`${link.fields.title}NavDropdown`}>
			<NavDropdown.Item href="/performanceSolutions" className="dropdown-cap">
				<img src="/winning-performance-icon.svg" />
				<div className="dropdown-cap-text">
					<h4>Performance Solutions</h4>
					<p>Face your challenges head-on</p>
				</div>
			</NavDropdown.Item>
			{
				link.fields.menu && link.fields.menu.map(toHeaderGroup)
			}
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
