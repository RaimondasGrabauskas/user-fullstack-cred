import React, { Component } from 'react';
import { createUser } from '../utils/request';
class UserForm extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      inputValue: {
        name: '',
        age: '',
        email: '',
        password: '',
      }
    }
  }

  handleInput = (event) => {
    const inputValueCopy = {...this.state.inputValue};
    inputValueCopy[event.target.name] = event.target.value;
    this.setState({inputValue: inputValueCopy});
  }

  clearInputs = () => {
    this.setState({inputValue: 
    {
      name: '',
      age: '',
      email: '',
      password: '',
    }
    });
  }

  addUser = async (event) => {
    event.preventDefault();
    const { name, age, email, password } = this.state.inputValue;

    const newUserDetails = {
      name, 
      age, 
      email, 
      password
    };

   const success = await createUser(newUserDetails);

   if(success) {
     this.props.getAllUsers();
   }

   this.clearInputs();
  }



  render() {
    const { name, age, email, password } = this.state.inputValue;
    return (
      <div className="w-50">
      <h2>Add User</h2>
      <form onSubmit={this.addUser} autoComplete="off">
        <div className="form-group">
          <label>Enter name</label>
          <input value={name} onChange={this.handleInput} type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label >Enter age</label>
          <input value={age} onChange={this.handleInput} type="text" className="form-control" name="age"/>
        </div>
        <div  className="form-group">
          <label htmlFor="population">Enter email</label>
          <input value={email} onChange={this.handleInput} type="email" className="form-control" name="email"/>
        </div>
        <div className="form-group">
          <label>Enter password</label>
          <input value={password} onChange={this.handleInput} type="text" className="form-control" name="password"/>
        </div>
        <button className="btn btn-primary">Add user</button>
    </form>
  </div>
    );
  };
}

export default UserForm;