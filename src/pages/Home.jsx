import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to Our Platform</h5>
              <div>
                <h6>Explore and Connect</h6>
                <p>Our platform brings together individuals, NGOs, and corporations to collaborate and make a positive impact on society.</p>
                <p>Key features include:</p>
                <ul>
                  <li>NGO listings and events</li>
                  <li>Corporate donations and sponsorships</li>
                  <li>Individual volunteering opportunities</li>
                </ul>
              </div>
              <section id="get-started">
                <Link to="/signup" className="get-started-btn">Get Started</Link>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
