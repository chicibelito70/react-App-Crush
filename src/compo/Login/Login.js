import React, { useRef } from 'react';
import './login.css';

import { getEmail } from '../../logic/InicioS';
export default function Login() {
  const agaemail = useRef();
  const agaConstra = useRef();
  const are = async (e) => {
    //  debugger;
    //e.preventDefault();
    const email = agaemail.current.value;
    const constra = agaConstra.current.value;

    await getEmail(email, constra);

    //console.log(arr);
  };

  return (
    <form onSubmit={are}>
      <h1> Login</h1>
      <div className="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input
          ref={agaemail}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          ref={agaConstra}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Logearse
      </button>
    </form>
  );
}
