import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Felipe', age: '27' },
      { name: 'Jake', age: '21' },
      { name: 'Ali', age: '9' }
    ]
  }
  switchNameHandeler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: '34' },
        { name: 'Ibrahim', age: '65' },
        { name: 'Ali', age: '90' }
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Felipe', age: '34' },
        { name: event.target.value, age: '65' },
        { name: 'Ali', age: '90' }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      boxShadow: '0 1px 3px blue',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, im a React app</h1>
        <button 
        style={style}
        onClick={this.switchNameHandeler.bind(this, 'Felipe')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          change = {this.nameChangeHandler}
          click={this.switchNameHandeler.bind(this,'Pelipe')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>Hi, AM VEGAN</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}
export default App;
