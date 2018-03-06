import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/UserAction';

class RegisterUser extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', email: '', password: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleRegister(event) {
    event.preventDefault();
    console.log('this.state', this.state);
    this.props.register(this.state);

  }

  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          placeholder = 'Username'
        />

         <input
          type='text'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
          placeholder = 'Email'
        />

         <input
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          placeholder = 'Password'
        />
         <button type='submit'>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return{
    users:state.users.users
  }
}

const mapDispatchToProps = dispatch => {
  return{
    register: (user => {
      dispatch(register(user))
    })
  }
}

const ConnectedRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterUser)

export default ConnectedRegister;