import React, { Component } from 'react';

class LogosBanner extends Component {
    render(){
        return (
        <div className='logos-banner'>
            <p>
                intentional cultures both big and small leverage us to win
            </p>
            <img className='trip-spark-logo' src='/trip-spark-logo.png' />
            <img className='univar-logo' src='/univar-logo.png' />
            <img className='verra-mobility-logo' src='/verra-mobility-logo.jpeg' />
        </div>
        );
    };
};

export default LogosBanner;