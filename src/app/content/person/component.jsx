import React, { Component } from 'react';

import Users from './../users';
import User from './../user';

class Persons extends Component {
  constructor(props){
    super(props)
    this.state={
      users: [],
      user: []
    }
   }
   componentDidMount(){
     fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(result => this.setState({users:result}))   
    }
  render(){
  
  
    return(
      <div>
        <Users mrops={this.state.users} />
        
      </div>
    )
  }
}

export default Persons;