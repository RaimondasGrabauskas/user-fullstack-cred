import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props) 
    this.state = {}
  }

  render() {
    const {userData} = this.props;
    return (
      <div className="card w-20 m-2">
        <div className="card-body">
          <h5 className="card-title">Vardas: {userData.name}</h5>
          <h6 className="card-subtitle mb-2"><strong>Metai: </strong> {userData.age}</h6>
          <p className="card-text"><strong>El.paštas: </strong>{userData.email}</p>
          <p className="card-text"><strong>Slaptažodis: </strong>: {userData.password}</p>
          <button onClick={() => this.props.onDeletePlace(userData._id)} className="btn btn-danger m-1">Delete</button>
          <button onClick={() => this.handleToStartEdit()} className="btn btn-success">Edit</button>
      </div>
    </div>
    );
  };
}

export default User;