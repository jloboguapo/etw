import React, { Component } from 'react';

class LogosBanner extends Component {
    render(){
        return (
                <div className='logos-banner'>
                    <p>
                        intentional cultures both big and small leverage us to win
                    </p>
                    <img className='trip-spark-logo' src='./resources/trip-spark-logo.svg' />
                    <img className='univar-logo' src='./resources/univar-logo.svg' />
                    <img className='verra-mobility-logo' src='./resources/verra-mobility-logo.svg' />
                </div>
        );
    };
};

export default LogosBanner;