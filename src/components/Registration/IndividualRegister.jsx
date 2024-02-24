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
    <>
    <Navbar />
    <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={handleSubmit} className="registration-form">
                    <div className="mb-3">
                        <label htmlFor="userType" className="form-label">Select the type of User</label>
                        <select
                            value={activeForm}
                            onChange={handleFormChange}
                            className="form-select"
                        >
                            {forms.map((form) => (
                                <option key={form} value={form}>
                                    {form}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        {activeForm === "individual" && <IndividualRegister />}
                        {activeForm === "corporate" && <CorporateRegister />}
                        {activeForm === "ngo" && <NgoRegister />}
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="my-3 text-center">
                        <p>
                            Already have an account?{" "}
                            <Link to="/login" className="text-decoration-underline text-info">
                                Login
                            </Link>
                        </p>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Register
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

export default IndividualRegister;
