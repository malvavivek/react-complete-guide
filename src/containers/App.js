import React, { Component } from 'react';
import classes from './App.css';
// import Radium,{StyleRoot} from 'radium';
import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
class App extends Component {

  state = {
    persons:[
      {id:"1",name:'Max',age:28},
      {id:"2",name:'Emily', age:24},
      {id:"3",name:'Manu',age:28}
    ],
    otherState:'some value',
    showPersons:false
  }

  deletePersonHandler = (personIndex)=>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    // const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }

  togglePersonsHandler=()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
            click = {()=>this.deletePersonHandler(index)}
            name={person.name}
            age = {person.age}
            key={person.id}
            changed = {(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
            
        </div>
      );
      btnClass = classes.Red
      
    }
    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
  
      <div className={classes.App}>
        <h1>Hi,I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This better work</p>
        <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'work'))
  }
}

export default App;
