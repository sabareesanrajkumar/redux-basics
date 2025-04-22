import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
