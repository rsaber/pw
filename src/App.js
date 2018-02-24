import React, { Component } from 'react';
import logo from './logo.svg';
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1 className="start-title"><b>pw.</b>riyas.at</h1>
            <h6 className="start-title">a small tool written by <a href="http://riyas.at">riyasat</a></h6>

            <h1 className="start-title">Generate <b>strong</b> but <b>easy-to-remember</b> passwords.</h1>

            <h5 className="start-title">Everything is done in your browser. Absolutely no data is sent to us.</h5>

            <h6 className="start-title">Inspired by the <a href="#">xkcd</a> comic.</h6>

          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Container>
      </div>
    );
  }
}

export default App;
