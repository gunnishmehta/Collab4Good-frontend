import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NgoListing.css'

const NGO = () => {
  // Sample list of NGOs (replace with actual data from your backend)
  const NGOs = [
    {
      id: 1,
      name: 'Save the Children',
      mission: 'To improve the lives of children through better education, healthcare, and opportunities.',
      location: 'Global',
      website: 'https://www.savethechildren.org/',
    },
    {
      id: 2,
      name: 'Greenpeace',
      mission: 'To protect and preserve the environment for future generations.',
      location: 'Global',
      website: 'https://www.greenpeace.org/',
    },
    {
      id: 3,
      name: 'Doctors Without Borders',
      mission: 'To provide medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare.',
      location: 'Global',
      website: 'https://www.doctorswithoutborders.org/',
    },
    {
      id: 4,
      name: 'World Wildlife Fund (WWF)',
      mission: 'To conserve nature and reduce the most pressing threats to the diversity of life on Earth.',
      location: 'Global',
      website: 'https://www.worldwildlife.org/',
    },
    {
      id: 5,
      name: 'Oxfam',
      mission: 'To end the injustice of poverty by helping people build better futures for themselves.',
      location: 'Global',
      website: 'https://www.oxfam.org/',
    },
    {
      id: 6,
      name: 'UNICEF',
      mission: 'To promote the rights and well-being of every child in everything we do.',
      location: 'Global',
      website: 'https://www.unicef.org/',
    },
    {
      id: 7,
      name: 'Amnesty International',
      mission: 'To work towards a world where everyone enjoys human rights.',
      location: 'Global',
      website: 'https://www.amnesty.org/',
    },
    {
      id: 8,
      name: 'Habitat for Humanity',
      mission: 'To build homes and communities that are safe and affordable for everyone.',
      location: 'Global',
      website: 'https://www.habitat.org/',
    },
    {
      id: 9,
      name: 'The Nature Conservancy',
      mission: 'To conserve the lands and waters on which all life depends.',
      location: 'Global',
      website: 'https://www.nature.org/',
    }
  ];

  return (
    <>
      <Navbar />
      <div className="eventSection1">
        <h3 className='eventSection1-heading'>NGOs</h3>
      </div>{ }
      <div className="eventContainer">
        <div className="event-row row">

        {NGOs.map(ngo => (
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
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
};

export default NGO;
