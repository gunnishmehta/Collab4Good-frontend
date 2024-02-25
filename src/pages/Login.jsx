import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import '../styles/Login.css';

import { server } from '../main'
import axios from 'axios';

const LoginSection = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [activeForm, setActiveForm] = useState("individual");

    const handleFormChange = (event) => {
        setActiveForm(event.target.value);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const forms = ["individual", "corporate", "ngo"];
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${server}/auth/login`, {
                userType: activeForm,
                email: formData.email,
                password: formData.password
            });
            localStorage.setItem("email", formData.email);
            // Handle successful login response
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error("Login error:", error);
        }
    };
    return (
        <>
            <Navbar />
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center login-container">
                                    <div className="mb-md-5 mt-md-4 pb-5" >
                                        <form onSubmit={handleSubmit}>
                                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                            <div className="my-3">
                                                <label for="display-4">Select the type of User</label>
                                                <select
                                                    value={activeForm}
                                                    onChange={handleFormChange}
                                                    className="form-control"
                                                >
                                                    {forms.map((form) => (
                                                        <option key={form} value={form}>
                                                            {form}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>


                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="name@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            </div>
                                            <div className="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            </div>
                                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                            </div>
                                        </form>
                                    </div>
                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginSection;
