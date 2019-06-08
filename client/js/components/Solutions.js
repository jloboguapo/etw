import React, { Component } from 'react';

class Solutions extends Component {
    render(){
        return (
        <div className='etw-solutions-main-container'>
            <div className='etw-solutions-text-container'>
            <h2>
                Solutions built for high-performance
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
            </p>
            <br/>
            </div>
                <div className='etw-solutions-card-container'>
                <div className='people-card'>
                <img className='people-card-icon' src='./resources/people-card-icon.svg' />
                    <h4>
                    People
                    </h4>
                    <p>
                    Whether facing employee disengagement, weak performers, or decreasing loyalty, investing in people always precedes performance.
                    </p>
                </div>
                <div className='priorities-card'>
                <img className='priorities-card-icon' src='./resources/priorities-card-icon.svg' />
                    <h4>
                    Priorities
                    </h4>
                    <p>
                    Too many goals, unhelpful KPIs, and a lack of team-wide alignment fosters unnecessary confusion, internal competition, and petty politics. Focus.
                    </p>
                    <img className='view-our-solution' src='./resources/view-our-solution.svg' />
                </div>
                <div className='practices-card'>
                <img className='practices-card-icon' src='./resources/practices-card-icon.svg' />
                    <h4>
                    Practices
                    </h4>
                    <p>
                    While ineffective processes can be to blame for some lost productivity, it's cultural habits (or a lack thereof) that are the real culprit. Start improving.
                    </p>
                </div>
                <div className='performance-card'>
                <img className='performance-card-icon' src='./resources/performance-card-icon.svg' />
                    <h4>
                    Performance
                    </h4>
                    <p>
                    Performance is just an outcome of leadership becoming laser focused on honing their people, priorities, and practices. Unstick growth by getting intentional.
                    </p>
                </div>
            </div>
                <div>
                    <button
                    className='etw-webinar-button'
                    ></button>
                </div>
        </div>
        );
    };
};

export default Solutions;