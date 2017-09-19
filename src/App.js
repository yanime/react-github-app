import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import  Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu></Menu>
          <Container>
          </Container>
      </div>
    );
  }
}

export default App;
