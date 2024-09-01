import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(res => {
        console.log("login: " + res.data);
        if(res.data === "Success") {
           {
                navigate('/')
            }
        }
    }).catch(err => console.log(err))
}
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label >Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange = { (e) => setEmail(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label >Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange = { (e) => setpassword(e.target.value)}

                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
