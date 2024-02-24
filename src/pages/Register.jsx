import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import IndividualRegister from "../components/Registration/IndividualRegister";
import CorporateRegister from "../components/Registration/CorporateRegister";
import NgoRegister from "../components/Registration/NgoRegister";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Register.css';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [activeForm, setActiveForm] = useState("individual");

  const handleFormChange = (event) => {
    setActiveForm(event.target.value);
  };

  const forms = ["individual", "corporate", "ngo"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem("email", email);
      // Handle successful login response
      console.log(response.data);
    } catch (error) {
      // Handle error
      setError("Failed to log in. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="mb-3">
                <label htmlFor="userType" className="form-label">
                  Select the type of User
                </label>
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
              <div>
                {activeForm === "individual" && <IndividualRegister />}
                {activeForm === "corporate" && <CorporateRegister />}
                {activeForm === "ngo" && <NgoRegister />}
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="my-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 btn btn-dark btn-login" type="submit">
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

export default Register;
