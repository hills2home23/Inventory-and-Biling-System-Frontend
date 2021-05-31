import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { signInAction } from "../../actions";

function Login() {
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //call the action creater/ axios
    console.log(formData);
    dispatch(signInAction(formData));
  };


  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3" onSubmit={handleSubmit}>
                <Form.Group className="d-flex search-field">
                  <Form.Control type="email" name="email" placeholder="Email" size="lg" className="h-auto" onChange={handleOnChange}/>
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control type="password" name="password" placeholder="Password" size="lg" className="h-auto" onChange={handleOnChange}/>
                </Form.Group>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit" >SIGN IN</button>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  {/*<div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>*/}
                  <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Forgot password?</a>
                </div>
                
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Login
