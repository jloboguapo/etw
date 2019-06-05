import React, { Component } from 'react';
import Header from './Header';
import HomeTop from './HomeTop';

class Home extends Component {
    render() {
        return (
        <div>
            <Header />
            <br/><br/><br/><br/><br/><br/>
            <HomeTop />
        </div>
        );
    };
};
  
export default Home;