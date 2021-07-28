import React, { Component } from 'react';
import { getAllUsersData } from './utils/request';
import './App.css';
import UserForm from './component/UserForm';
import UserList from './component/UserList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    await this.getAllUsers();
  }

  getAllUsers = async () => {
    const allUsers = await getAllUsersData();
    this.setState({users: allUsers});
  }

  render() {
    return (
      <div className="App container">
        <div className="mb-4">
          <h1 className="text-center">User cred</h1>
        </div>
       <UserForm 
        getAllUsers={this.getAllUsers}
       />
        <UserList 
          users={this.state.users}
        />
      </div>
    );
  };
}

export default App;
