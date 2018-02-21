import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'firstlady',name: 'Jackie', age:19},
      {id: 'king',name: 'LeBron', age:32},
      {id: 'kardashian',name: 'Jezzy', age: 31}
    ],
    showPersons : false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( 
      {persons: persons})
  }
  ageChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.age = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( 
      {persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex ,1 );
    this.setState({persons: persons});
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  
  render() {

    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          nameChanged = {this.state.nameChangedHandler}
          ageChanged = {this.state.ageChangedHandler} />;
    }

     return (
      <div className={classes.App}>
        <Cockpit
        clicked = {this.tooglePersonsHandler}
        showPersons={this.state.showPersons}
        persons = {this.state.persons}/>
        {persons}
        </div>
    );
  // return React.createElement('div',{className: "App"} , React.createElement('h1', null , 'Wazzuuuo'));
  }
}


export default App;
