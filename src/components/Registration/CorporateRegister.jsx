import React, { useState } from "react";
import axios from "axios";

const CorporateRegister = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    socialMediaLinks: "",
    coverImage: null
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/signup/corporate", formData);
      console.log(response.data);

      setFormData({
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
        csrInterests: "",
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
      <div class="my-3">
        <label for="display-4">Enter Company Name</label>
        <input
          type="text"
          name="companyName"
          class="form-control"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div class="my-3">
        <label for="display-4">Email Address</label>
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div class="my-3">
        <label for="display-4">Password</label>
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
        <label for="display-4">Website</label>
        <input
          type="text"
          name="website"
          class="form-control"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          required
        />
      </div>
            
      <div class="my-3">
        <label for="display-4">Social Media Links</label>
        <input
          type="text"
          name="socialMediaLinks"
          class="form-control"
          placeholder="Social Media Links"
          value={formData.socialMediaLinks}
          onChange={handleChange}
          required
        />
      </div>
            
      <div class="my-3">
        <label for="display-4">coverImage</label>
        <input
          type="file"
          name="coverImage"
          class="form-control"
          value={formData.coverImage}
          onChange={handleChange}
          required
        />
      </div>
      
    </form>
  );
};

export default CorporateRegister;
