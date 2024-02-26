import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { ActionTypes } from '../context/auth/actionTypes';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const {state} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    
    dispatch({ type: ActionTypes.LOGIN_REQUEST });

    try {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: { user: { id: 1, name: 'test' } },
      });
      navigate('/home')

    } catch (error) {
      dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: { error: 'Login failed' } });
    }
  };

  useEffect(() => {
    console.log(state); // Log the updated state after it's been updated
  }, [state]);

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
