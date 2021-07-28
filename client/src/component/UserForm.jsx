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
      <h2>Pridėkite vartotoja</h2>
      <form className="form" onSubmit={this.addUser} autoComplete="off">
        <div className="form-group">
          <label>Įveskite vardą</label>
          <input required value={name} onChange={this.handleInput} type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label >Įveskite metus</label>
          <input required value={age} onChange={this.handleInput} type="text" className="form-control" name="age"/>
        </div>
        <div  className="form-group">
          <label htmlFor="population">Įveskite el. pašto adresą</label>
          <input required value={email} onChange={this.handleInput} type="email" className="form-control" name="email"/>
        </div>
        <div className="form-group">
          <label>Iveskite slaptažodį</label>
          <input required value={password} onChange={this.handleInput} type="text" className="form-control" name="password"/>
        </div>
        <button className="btn btn-primary">Pridėkite</button>
    </form>
  </div>
    );
  };
}

export default UserForm;