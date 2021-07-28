import React, { Component } from 'react';
import { getAllUsersData, editUser, deleteUser} from './utils/request';
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

  updateUser = async (id, detailsToEdit) => {
    const updateSuccess = await editUser(id, detailsToEdit);
    if(updateSuccess) {
      this.getAllUsers();
    }
  }

  deleteUser = async (id) => {
    const deleteSuccess = await deleteUser(id);
    if (deleteSuccess) {
      this.getAllUsers();
    }
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
          onEdit={this.updateUser}
          onDelete={this.deleteUser}
        />
      </div>
    );
  };
}

export default App;
