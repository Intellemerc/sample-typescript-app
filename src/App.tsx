import * as React from 'react';
import './App.css';
import TodoContainer from './containers/todoContainer';
import SampleFn from './components/SampleComponentFn';
import SampleClass from './components/SampleComponentClass';

const logo = require('./logo.svg');

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React w/Typescript</h2>
        </div>
        
        <h4>Sample components</h4>
        <SampleClass />
        <SampleFn />
        <br />
        <TodoContainer PersonsName="James"/>
      </div>
    );
  }
}

export default App;
