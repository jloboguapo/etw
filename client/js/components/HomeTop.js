import React, { Component } from 'react';

class HomeTop extends Component {
    render(){
        return (
            <div className='etw-home-top-container'>
                <div className='etw-home-top-left-container'>
                    <h1>
                        Only the intentional become exceptional
                    </h1>
                    <p>
                        ETW is the Intentional Leadership Platform that high-performance organizations trust to strengthen culture and accelerate growth
                    </p>
                    <button
                    className='etw-webinar-button'
                    >
                    JOIN our next WEBINAR
                    </button>
                </div>
                <div className='etw-home-top-right-container'>
                    <div className='etw-home-top-right-container-1'>
                        <img className='etw-strengthen-culture-icon' src='./resources/etw-strengthen-culture.svg' />
                        <h4>
                            Strengthen culture
                        </h4>
                        <p>
                            Develop a value-creation mindset and skill set within all your employees.
                        </p>
                        <img className='put-people-first' src='./resources/put-people-first.svg' />
                    </div>
                    <div className='etw-home-top-right-container-2'>
                        <img className='etw-accelerate-growth-icon' src='./resources/etw-accelerate-growth.svg' />
                        <h4>
                            Accelerate growth
                        </h4>
                        <p>
                            Clarify and accomplish what's most important across your organization.
                        </p>
                    </div>
                </div>
            </div>
        );
    };
};

export default HomeTop;