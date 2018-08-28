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

  printState = () => {
    console.log(this.state);
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}
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
