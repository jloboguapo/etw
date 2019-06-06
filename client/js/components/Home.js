import React, { Component } from 'react';
import Header from './Header';
import HomeTop from './HomeTop';
import LogosBanner from './LogosBanner';

class Home extends Component {
    render() {
        return (
        <div className='etw-main-container'>
            <div className='etw-secondary-container'>
                <Header />
                <br/><br/><br/><br/><br/><br/>
                <HomeTop />
            </div>
            <br/><br/><br/><br/><br/><br/>
            <LogosBanner />
        </div>
        );
    };
};
  
export default Home;