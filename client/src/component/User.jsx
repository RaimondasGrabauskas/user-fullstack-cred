import React, { Component } from 'react';

class User extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      editInputValue: {
        name: '',
        age: '',
        email: '',
        password: '',
      },
      isEditOn: false,
    }
  }

  componentDidMount() {
    this.propsInputValueToStateInputValue();
  }

  propsInputValueToStateInputValue() {
    const {name, age, email, password} = this.props.userData;
    this.setState({editInputValue: {name, age, email, password}});
  }

  handleIsEditOn = () => {
    this.setState({isEditOn: !this.state.isEditOn})
  }

  handleChange = (event) => {
    const newInputValueCopy = {...this.state.editInputValue};
    newInputValueCopy[event.target.name] = event.target.value;
    this.setState({editInputValue: newInputValueCopy});
  }

  handleEdit = async (id) => {
    const { name, age, email, password } = this.state.editInputValue;
    const editDetails = {
      name, 
      age, 
      email, 
      password
    };

    await this.props.onEdit(id, editDetails);
    this.handleIsEditOn();

  }

  render() {
    const {userData} = this.props;
    const { editInputValue, isEditOn } = this.state;
    return (
      <div className="card w-20 m-2">  
        {isEditOn ? (
          <form className="form-group">
            <div className="form-group">
              <input value={editInputValue.name} onChange={this.handleChange} name="name" type="text"/>
            </div>
            <div className="form-group">
              <input value={editInputValue.age} onChange={this.handleChange} name="age" type="text" />
            </div>
            <div className="form-group">
              <input value={editInputValue.email} onChange={this.handleChange} name="email" type="email" />  
            </div>
            <div className="form-group">
              <input value={editInputValue.password} onChange={this.handleChange} name="password" type="text" />
            </div>
            <button onClick={() => this.handleEdit(userData._id)} className="btn btn-success">Save</button>
          </form>
        ) : (
          <div className="card-body">
            <h5 className="card-title">Vardas: {userData.name}</h5>
            <h6 className="card-subtitle mb-2"><strong>Metai: </strong> {userData.age}</h6>
            <p className="card-text"><strong>El.paštas: </strong>{userData.email}</p>
            <p className="card-text"><strong>Slaptažodis: </strong> {userData.password}</p>
            <button onClick={() => this.props.onDelete(userData._id)} className="btn btn-danger m-1">Ištrinti</button>
            <button onClick={() => this.handleIsEditOn()} className="btn btn-success">Redaguoti</button>
          </div>
          )
        }
    </div>
    );
  };
}

export default User;