import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Collab4Good</h1>
        <hr />
        <p className="lead">
          Collab4Good is a visionary platform dedicated to revolutionizing social collaboration and community empowerment. At Collab4Good, we believe in harnessing the collective power of individuals, NGOs, and corporations to drive positive change and create a brighter future for all.
        </p>
        <p>
          Our mission is simple yet ambitious: to provide a centralized hub where NGOs can showcase their impactful work, individuals can discover meaningful volunteering opportunities, and corporations can fulfill their corporate social responsibility by supporting worthy causes.
        </p>
        <p>
          Collab4Good is not just a platform; it's a movement towards a more compassionate and equitable society. By facilitating collaboration and support among diverse stakeholders, we aim to address pressing social issues, foster community development, and inspire a culture of empathy and solidarity.
        </p>
        <p>
          Join us on this transformative journey as we harness the power of collaboration to make a lasting impact. Together, let's build a world where everyone has the opportunity to thrive, and no one is left behind.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
