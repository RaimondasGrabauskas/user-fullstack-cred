import React, { Component } from 'react';
import { getAllUsersData, createUser } from './utils/request';
import './App.css';


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
       
      </div>
    );
  };
}

export default App;
