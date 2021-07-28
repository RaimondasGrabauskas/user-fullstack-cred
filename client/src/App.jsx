import React, { Component } from 'react';
import { getAllUsersData } from './utils/request';
import './App.css';
import UserForm from './component/UserForm';


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
      <div className="App">
       <UserForm 
        getAllUsers={this.getAllUsers}
       />
      </div>
    );
  };
}

export default App;
