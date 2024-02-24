import React, { useState } from "react";
import axios from "axios";

const IndividualRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    // interests: "",
    // contactNumber: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/signup/individual", formData);
      console.log(response.data);
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
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>  
      <div class="my-3">
        <label for="display-4">Enter Your Name</label>
        <input
          type="text"
          name="fullName"
          class="form-control"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div class="my-3">
        <label for="display-4">Email address</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div class="my-3">
        <label for="display-4">Enter Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div class="my-3">
        <label for="display-4">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          class="form-control"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      
      <div class="my-3">
        <label for="display-4">Location</label>
        <input
          type="text"
          name="location"
          class="form-control"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      {/* <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" /> */}
      {/* <input type="text" name="interests" value={formData.interests} onChange={handleChange} placeholder="Interests/Skills" />
      <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" /> */}
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default IndividualRegister;
