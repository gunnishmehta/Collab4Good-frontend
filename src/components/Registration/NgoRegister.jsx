import React, { useState } from "react";
import axios from "axios";

const NgoRegister = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    missionStatement: "",
    website: "",
    socialMediaLinks: "",
    coverImage: null
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to your backend server with the form data
      const response = await axios.post("/api/signup/ngo", formData);
      console.log(response.data); // Assuming your backend returns a success message
      // Reset form fields after submission
      setFormData({
        organizationName: "",
        email: "",
        password: "",
        location: "",
        missionStatement: "",
        website: "",
        socialMediaLinks: "",
        coverImage: null
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
      <div className="my-3">
        <label htmlFor="organizationName">Organization Name</label>
        <input
          type="text"
          name="organizationName"
          className="form-control"
          placeholder="Organization Name"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="my-3">
        <label htmlFor="email">Email Address</label>
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
        <label htmlFor="password">Password</label>
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
        <label htmlFor="confirmPassword">Confirm Password</label>
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
        <label htmlFor="location">Location</label>
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
      <div className="my-3">
        <label htmlFor="missionStatement">Mission Statement</label>
        <textarea
          name="missionStatement"
          className="form-control"
          placeholder="Mission Statement"
          value={formData.missionStatement}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          name="website"
          className="form-control"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <label htmlFor="socialMediaLinks">Social Media Links</label>
        <input
          type="text"
          name="socialMediaLinks"
          className="form-control"
          placeholder="Social Media Links"
          value={formData.socialMediaLinks}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <label htmlFor="coverImage">coverImage</label>
        <input
          type="file"
          name="coverImage"
          className="form-control"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default NgoRegister;
