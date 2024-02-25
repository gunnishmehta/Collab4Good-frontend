import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NgoListing.css';
import axios from 'axios';

const NGO = () => {
  const NGOs = [
    {
      id: 1,
      organizationName: "Save the Children",
      email: "info@savethechildren.org",
      password: "password123",
      missionStatement: "To improve the lives of children through better education, healthcare, and opportunities.",
      location: "Global",
      events: [],
      razorpayId: ""
    },
    {
      id: 2,
      organizationName: "Greenpeace",
      email: "info@greenpeace.org",
      password: "greenpeace123",
      missionStatement: "To protect and preserve the environment for future generations.",
      location: "Global",
      events: [],
      razorpayId: ""
    },
    {
      id: 3,
      organizationName: "Doctors Without Borders",
      email: "info@doctorswithoutborders.org",
      password: "doctors123",
      missionStatement: "To provide medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare.",
      location: "Global",
      events: [],
      razorpayId: ""
    },
    {
      id: 4,
      organizationName: "World Wildlife Fund (WWF)",
      email: "info@wwf.org",
      password: "wwf123",
      missionStatement: "To conserve nature and reduce the most pressing threats to the diversity of life on Earth.",
      location: "Global",
      events: [],
      razorpayId: ""
    },
    {
      id: 5,
      organizationName: "Oxfam",
      email: "info@oxfam.org",
      password: "oxfam123",
      missionStatement: "To end the injustice of poverty by helping people build better futures for themselves.",
      location: "Global",
      events: [],
      razorpayId: ""
    }
  ];
  
  useEffect(() => {
    async function fetchNGOs() {
      try {
        const response = await axios.get('/api/ngos'); // Adjust the endpoint URL as needed
        setNGOs(response.data);
      } catch (error) {
        console.log('Error fetching NGOs:', error.message);
      }
    }

    fetchNGOs();
  }, []);
  const getBackgroundImageUrl = (index) => {
    return `/assets/eventsPage/event${index % 5 + 1}.png`; // Assuming there are 5 different images
  };

  return (
    <>
      <Navbar />
      <div className="eventSection1">
        <h3 className='eventSection1-heading'>NGOs</h3>
      </div>
      <div className="eventContainer">
        <div className="event-row row">
          {Array.isArray(NGOs)?(NGOs.map(ngo => (
            <div className="col-md-4 mb-4" key={ngo.id}>
              <div className="card h-100" >
                <div className='ngoListing-picture rounded-top' style={{ backgroundImage: `url(${getBackgroundImageUrl(ngo.id)})` }}></div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{ngo.organizationName}</h5>
                  <p className="card-text flex-grow-1">{ngo.missionStatement}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Location:</strong> {ngo.location}</li>
                    <li className="list-group-item"><strong>Email:</strong> {ngo.email}</li>
                  </ul>
                  <Link to="/customngo" className="btn btn-lg section2-btn">Discover more</Link>
                </div>
              </div>
            </div>
          ))):<p>Loading...</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NGO;
