import React, { Component } from 'react';
import logo from './logo.svg';
import {Container} from 'reactstrap';
import GeneratorForm from './components/GeneratorForm/GeneratorForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header">
            <h1 className="title"><b>pw.</b>riyas.at</h1>
            <h6 className="title">a small tool written by <a href="http://riyas.at">riyasat</a></h6>

            <h1 className="title">Generate <b>strong</b> but <b>easy-to-remember</b> passwords.</h1>

            <h5 className="title">Everything is done in your browser. Absolutely no data is sent to us.</h5>

            <h6 className="title">Inspired by the <a href="#">xkcd</a> comic.</h6>

          </header>
          <GeneratorForm/>
        </Container>
      </div>
    );
  }
}

export default App;
