import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NgoListing.css';
import axios from 'axios';

const NGO = () => {
  const [NGOs, setNGOs] = useState([]);

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
              <div className="card h-100">
                <div className='ngoListing-picture rounded-top'></div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{ngo.name}</h5>
                  <p className="card-text flex-grow-1">{ngo.mission}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Location:</strong> {ngo.location}</li>
                    <li className="list-group-item"><strong>Website:</strong> <a href={ngo.website} target="_blank" rel="noopener noreferrer">{ngo.website}</a></li>
                  </ul>
                  <a href="#" className="btn custom-btn mt-3 align-self-start">Learn More</a>
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
