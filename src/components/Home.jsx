import React, { Component } from 'react';
import NavigationBar from './nav/NavigationBar';
class Home extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/> 
                <h1>Home page</h1>
            </div>
        );
    }
}

export default Home;