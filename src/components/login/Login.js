import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authAction } from '../../store/auth';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import axios from 'axios';

export default function Login() {
  const history = useHistory();

  const baseUrl = 'https://reqres.in/api/login';

  //   //Store values
  const dispatch = useDispatch();
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //   alert(userType);
  const [loginData, setLoginData] = useState(null);

  //Authentication Check Function
  const authenticationCheckFn = (formData) => {
    console.log('formData', formData);
    //calling store function to verify authentication

    axios
      .post(`${baseUrl}`, formData)
      .then((data) => {
        if (data.data) {
          dispatch(authAction.isLogging(true));
        }

        console.log('logged ', data.data);
      })
      .catch((error) => {
        // serErrors(error.message)
        console.log('error', error.message);
        alert('Login Failed....Please enter correct username and password');
      });

    setLoginData(formData);
  };

  useEffect(() => {
    //Check authentication and redirect
    if (isAuthenticated) {
      history.push({
        pathname: '/admin_dashboard',
        state: { loginData: loginData },
      });
    }
  }, [authenticationCheckFn]);

  return (
    <div>
      <LoginForm authenticationCheckFn={authenticationCheckFn} />
    </div>
  );
}
