import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="section1">
        <button type="button" className="btn btn-lg section1-btn">Discover more</button>
      </div>
      <div className="section2">
        <button type="button" className="btn btn-lg section2-btn">Discover more</button>
      </div>
      <div className="section3"></div>
      <div className="section4"></div>
      <div className="section5">
        <button type="button" className="btn btn-lg section5-btn">Discover more</button>
      </div>
      <div className="section6">
        <div className="section6-1">
          <button type="button" className="btn btn-lg section6-btn">Discover more</button>
        </div>
        <div className="section6-2">
          <button type="button" className="btn btn-lg section6-btn">Discover more</button>
        </div>
      </div>
      <div className="section7"></div>
      <Footer />
    </>
  );
};



export default Home;


{/* <div className="hero border-1 pb-3">
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
</div> */}
