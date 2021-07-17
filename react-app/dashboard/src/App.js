import React from 'react';
import Navbar from './Navbar';
import Table from './Table';

import Search from './Search'
class App extends React.Component{

  state ={
    animalName:"",
    area:""
  }

  inputChange=(areaSend)=>{
    this.setState({area:areaSend})
  }

  inputChange1=(animalNameSend)=>{
    this.setState({animalName:animalNameSend});
  }

  render(){
    return (
      <React.Fragment>
          <Navbar/>
          <br/>
          <Search inputChange={this.inputChange} inputChange1={this.inputChange1}/>
          <br/>
          <Table reciveData = {this.state.area} reciveData1={this.state.animalName}/>
      </React.Fragment>
    );
  }
}

export default App;
