import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons:[
      {name:'Max',age:28},
      {name:'Emily', age:24},
      {name:'Manu',age:28}
    ],
    otherState:'some value'
  }

  switchNameHandler = (newName)=>{
    // console.log('was clicked');
    // this.state.persons[0].name = "Maximum"
    this.setState({persons:[
      {name:newName,age:28},
      {name:'Emily', age:27},
      {name:'Manu',age:28}
    ]})
  }

  nameChangedHandler = (event)=>{
    this.setState({persons:[
      {name:'Max',age:28},
      {name:event.target.value, age:27},
      {name:'Stephanie',age:28}
    ]})
  }
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>Hi,I'm a React App</h1>
        <p>This better work</p>
        <button
        style={style}
        onClick={()=>this.switchNameHandler('KO')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'Stuart')}
          changed = {this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'work'))
  }
}

export default App;
