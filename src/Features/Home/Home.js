import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './Home.css';
import gradPicture from './grad.jpg'

class Home extends Component {
  render() {
    return (
      <div className="body">
        <div className="rectangle">
          <div className="in-rectangle">
            <h1 id="text"> Erika  </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
