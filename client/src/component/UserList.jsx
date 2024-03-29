import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  constructor(props) {
    super(props) 
    this.state = {}
  }

  render() {
    const {onEdit, onDelete} = this.props;
    return (
      <div>
        <h2 className="text-center">Vartotojų sąrašas</h2>
        <div className="user-list d-flex flex-wrap">
          {this.props.users.length === 0 ? (
            <div className="alert alert-dark" role="alert">
            OOPS nėra vartotoju prašome iveskite vartotoja!
          </div>
          ) : (       
            this.props.users.map((user) => (
              <User 
                key={user._id}
                userData={user}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          )     
        }
        </div>
      </div>
    );
  };
}

export default UserList;