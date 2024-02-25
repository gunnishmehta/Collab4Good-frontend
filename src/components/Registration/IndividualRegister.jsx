import React, { useState } from "react";
import axios from "axios";
import {server} from '../../main'
import {useNavigate} from 'react-router-dom'


const IndividualRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userType: "individual",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${server}/auth/register/individual`, formData);
      console.log(response.data);
      navigate('/events')
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label for="display-4">Enter Your Name</label>
        <input
          type="text"
          name="fullName"
          className="form-control"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="my-3">
        <label for="display-4">Email address</label>
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
      </div>
      <div className="my-3">
        <label for="display-4">Enter Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="my-3">
        <label for="display-4">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <div className="my-3">
        <label for="display-4">Location</label>
        <input
          type="text"
          name="location"
          className="form-control"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <button className="my-2 mx-auto btn btn-dark" type="submit">
        Register
      </button>
    </form>
  );
};

export default IndividualRegister;
