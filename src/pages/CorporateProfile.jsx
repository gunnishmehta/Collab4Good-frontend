import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const CorporateProfile = () => {
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    // Fetch company data from backend API
    axios.get('/api/company')
      .then(response => {
        setCompanyData(response.data);
      })
      .catch(error => {
        console.error('Error fetching company data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Corporate Profile</h1>
        {companyData && (
          <div>
            <h2>{companyData.name}</h2>
            <p>{companyData.description}</p>

            <h3>Donations:</h3>
            <ul>
              {companyData.donations.map(donation => (
                <li key={donation.id}>
                  {donation.amount} donated to {donation.ngo} for {donation.event}
                </li>
              ))}
            </ul>

            <h3>Supported Events/NGOs:</h3>
            <ul>
              {companyData.supportedEvents.map(event => (
                <li key={event.id}>
                  {event.name} - {event.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CorporateProfile;
