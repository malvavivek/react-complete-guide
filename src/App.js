import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';
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

  // switchNameHandler = (newName)=>{
  //   // console.log('was clicked');
  //   // this.state.persons[0].name = "Maximum"
  //   this.setState({persons:[
  //     {name:newName,age:28},
  //     {name:'Emily', age:27},
  //     {name:'Manu',age:28}
  //   ]})
  // }

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
    const style = {
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    let persons = null;
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
      style.backgroundColor="red";
    }
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p className={classes.join(" ")}>This better work</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'work'))
  }
}

export default Radium(App);
