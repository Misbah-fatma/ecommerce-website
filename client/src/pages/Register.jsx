import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/register' , {name, email, password})
        .then(result => {
             console.log(result)
             navigate('/')
        })
        .catch(err => console.log(err))
    } 
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form onSubmit={handleSubmit}>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    onChange = { (e) => setName(e.target.value)}
                                />
                            </div>
                            <div class="form my-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    onChange = { (e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form  my-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    onChange = { (e) => setpassword(e.target.value)}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register