import React, { Component } from 'react';
import User from './User';

class UserList extends Component {

  constructor(props) {
    super(props) 
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User list</h2>
        <div className="user-list d-flex flex-wrap">
          {this.props.users.map((user) => (
            <User 
              key={user.id}
              userData={user}
            />
          ))}
        </div>
      </div>
    );
  };
}

export default UserList;