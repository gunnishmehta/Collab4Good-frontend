import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import "../styles/Register.css";
import IndividualRegister from "../components/Registration/IndividualRegister.jsx";
import CorporateRegister from "../components/Registration/CorporateRegister.jsx";
import NgoRegister from "../components/Registration/NgoRegister.jsx";

const Register = () => {
  const [error, setError] = useState("");

  const [activeForm, setActiveForm] = useState("individual");

  const handleFormChange = (event) => {
    setActiveForm(event.target.value);
  };

  const forms = ["individual", "corporate", "ngo"];

  

  return (
    <>
      <Navbar />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center login-container">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
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
                      </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="text-white-50 fw-bold">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
