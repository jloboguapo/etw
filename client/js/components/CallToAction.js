import React from 'react';

const CallToAction = ( { linkUrl, linkName, arrowClassName, source, } ) => (
	<a className="arrow-link" href={linkUrl}>
		<span className="call-to-action">{linkName}</span>
		<img className={arrowClassName} src={source}/>
	</a>
);

export default CallToAction;
