import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {

  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Emily', age:24},
      {name:'Manu',age:28}
    ]
  }

  switchNameHandler = ()=>{
    console.log('was clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p>This better work</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'work'))
  }
}

export default App;
