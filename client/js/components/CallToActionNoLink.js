import React from 'react';

const CallToActionNoLink = ( { content, arrowClassName, source } ) => ( <span className="arrow-link">
	<span className="call-to-action">{content}</span>
	<img className={arrowClassName} src={source}/>
</span> );

export default CallToActionNoLink;
