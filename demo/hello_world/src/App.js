import React from 'react';
import logo from './logo.svg';
import './App.css';

function NameBadge(props){
  console.log(props);
  return (
  <p>My name is {props.name}</p>
  )
}

class App extends React.Component{
  clickHandler() {
    alert("Clicked +");
    console.log(this);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={this.clickHandler}>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World
        </p>
        <NameBadge name="Alex"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
