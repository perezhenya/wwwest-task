import React from 'react';
import {Redirect} from 'react-router-dom';
import {AuthContext} from './AuthContext';
import {api} from '../api/api';
import {login} from './Auth';
import '../styles/App.css';

class Authentication extends React.Component  {
  static contextType = AuthContext;
  state = {
    userName: '',
    password: '',
    errors: {},
  }

  handleChange = e => {
    this.setState({ 
      [e.target.name]:e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    const {userName,password} = this.state
    this.setState({
      errors: {
        username: 'The username you entered is incorrect',
        password: 'The password you entered is incorrect'
        
      },
    })
      const response = await api.post(api.baseUrl, {
        username:userName, 
        password,
      });            
        login(response.data);            
      if (this.context.setUser(response.data)) {
        return <Redirect to='/profile' />
      }
  }
  render = () => {
    const {onSubmit, handleChange} = this;
    const {userName, password, errors } = this.state;
  return (
    <div className="form-login-container">
      <form className="form-login" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal text-center">
            Login
        </h1>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                className="form-control"
                placeholder="Пользователь"
                name="userName"
                value={userName}
                onChange={handleChange}
            />
              {userName !== 'admin' && 
            <p className="error-message">{errors.username}</p>}
            
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Пароль"
                name="password"
                value={password}
                onChange={handleChange}
            />
            {password !== '12345' && 
            <p className="error-message">{errors.password}</p>}
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
            Вход
        </button>
    </form>
 </div>
  );
};
}

export default Authentication;
