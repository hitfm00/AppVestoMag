import React from 'react';

import { useFormik } from 'formik';
import fetch from 'isomorphic-fetch';

import s from './style.module.sass';

const LoginForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      alert('К сожалению не получилось получить токен из-за CORS');
      let response = fetch('http://167.172.186.154/token/request', {
        method: 'post',
        body: JSON.stringify(values),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
        .then((response) => {
          response.json();
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.login__form}>
      <label htmlFor="email">Email Address</label>

      <input
        id="username"
        name="username"
        type="email"
        placeholder="Username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <label htmlFor="email">Password</label>

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
