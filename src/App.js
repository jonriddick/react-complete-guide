import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import PrintState from './PrintState/PrintState';

class App extends Component {
  state = {
    persons: [
      {name:'Jon', age: 39},
      {name:'Ricky', age: 20},
      {name:'Bobby', age: 21}
    ],
    otherState: 'other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //console.log(this.state);
    // Don't do this: this.state.persons[0].name = 'Jonathan';
    this.setState({
      persons: [
        {name: newName, age: 39},
        {name: 'Ricky', age: 20},
        {name: 'Bobby', age: 21}
      ]
    })
  }

  printState = () => {
    console.log(this.state);
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Jon', age: 39},
        {name: event.target.value, age: 20},
        {name: 'Bobby', age: 21}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map(person => {
              return <Person
              name={person.name}
              age={person.age} />
            })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
        <br/><br/><PrintState 
        click={this.printState}/>
      </div>
    );
  }
}

export default App;
