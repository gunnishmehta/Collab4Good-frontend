import React, { useState } from "react";
import axios from "axios";
import {server} from '../../main'

const CorporateRegister = () => {
  const [formData, setFormData] = useState({
    userType: "corporate",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    socialMediaLinks: "",
    coverImage: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${server}/auth/register/corporate`, formData);
      console.log(response.data);

      setFormData({
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        csrInterests: "",
        website: "",
        socialMediaLinks: "",
        coverImage: null,
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
        <label for="display-4">Enter Company Name</label>
        <input
          type="text"
          name="companyName"
          className="form-control"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="my-3">
        <label for="display-4">Email Address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="my-3">
        <label for="display-4">Password</label>
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
        <label for="display-4">Website</label>
        <input
          type="text"
          name="website"
          className="form-control"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>

      <div className="my-3">
        <label for="display-4">Social Media Links</label>
        <input
          type="text"
          name="socialMediaLinks"
          className="form-control"
          placeholder="Social Media Links"
          value={formData.socialMediaLinks}
          onChange={handleChange}
          required
        />
      </div>

      <div className="my-3">
        <label for="display-4">coverImage</label>
        <input
          type="file"
          name="coverImage"
          className="form-control"
          value={formData.coverImage}
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

export default CorporateRegister;
