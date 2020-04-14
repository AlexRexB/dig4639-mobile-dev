import React from 'react';
import './App.css';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content:"", list: []}
  }

  async getServerData() {
    const response = await fetch("https://official-joke-api.appspot.com/random_ten")
    console.log("Received response from server!")
    console.log(response)
    let obj = await response.json()
    console.log("Processed response as JSON: ", obj)
    // this.setState({content:obj.b})
    this.setState({list:obj})
  }

  componentDidMount() {
    console.log("Component did mount!")
    this.getServerData()
  }
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
        {this.state.list.map((listObject, index) =>
        <Card key={index} title={listObject.setup}>{listObject.punchline}</Card>
        )}
      </div>
    );
  }
  
}

export default App;
