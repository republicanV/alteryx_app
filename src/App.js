import React, { Component } from 'react';
import styled from 'react-emotion';

import Registration from './Registration';

const Header = styled('header')`
    display: flex;
    position: fixed;
    z-index: 1;
    top: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    border-bottom: #29487D;
    background-color: #4267B2;      
`;

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <Registration/>
      </div>
    );
  }
}

export default App;
