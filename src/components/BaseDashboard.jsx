import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BaseDashboard = () => {
  // Sample list of events (replace with actual data from your backend)
  const events = [
    {
      id: 1,
      name: 'Charity Fundraiser',
      date: 'February 20, 2024',
      description: 'Join us for a charity fundraiser event to support children in need.',
      location: 'Community Center',
      organizer: 'Charity Foundation',
    },
    {
      id: 2,
      name: 'Environmental Cleanup Drive',
      date: 'March 10, 2024',
      description: 'Help us clean up the environment by participating in our cleanup drive.',
      location: 'City Park',
      organizer: 'Green Earth Organization',
    },
    {
      id: 3,
      name: 'Technology Conference',
      date: 'April 5, 2024',
      description: 'Attend our technology conference to learn about the latest innovations.',
      location: 'Convention Center',
      organizer: 'Tech Innovations Inc.',
    },
    {
      id: 4,
      name: 'Art Exhibition',
      date: 'May 15, 2024',
      description: 'Explore beautiful artworks created by talented artists from around the world.',
      location: 'Art Gallery',
      organizer: 'Creative Arts Society',
    },
    {
      id: 5,
      name: 'Music Festival',
      date: 'June 30, 2024',
      description: 'Enjoy live music performances by popular artists in our annual music festival.',
      location: 'Outdoor Arena',
      organizer: 'Music Events LLC',
    },
    {
      id: 6,
      name: 'Educational Seminar',
      date: 'July 20, 2024',
      description: 'Join our educational seminar to enhance your knowledge and skills.',
      location: 'University Auditorium',
      organizer: 'Learning Institute',
    }
  ];
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
      <div className="container mt-4">
        <h2 className="mb-4">Upcoming Events</h2>
        <div className="row">
          {events.slice(0, 4).map(event => (
            <div className="col-md-3 d-flex" key={event.id}>
              <div className="card flex-fill mb-4">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text flex-grow-1">{event.description}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date:</strong> {event.date}</li>
                    <li className="list-group-item"><strong>Location:</strong> {event.location}</li>
                    <li className="list-group-item"><strong>Organizer:</strong> {event.organizer}</li>
                  </ul>
                  {/* Add button to sign up or learn more about the event */}
                  <a href="#" className="btn btn-primary mt-3 align-self-start">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column justify-content-end">
          <a href="/events" className="btn btn-light btn-outline-dark mt-3 align-self-end" >Show More ...</a>
        </div>
      </div>
      <div className="container mt-4">
        <h2 className="mb-4">NGOs</h2>
        <div className="row">
          {NGOs.slice(0, 4).map(ngo => (
            <div className="col-md-3 mb-4" key={ngo.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{ngo.name}</h5>
                  <p className="card-text flex-grow-1">{ngo.mission}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Location:</strong> {ngo.location}</li>
                    <li className="list-group-item"><strong>Website:</strong> <a href={ngo.website} target="_blank" rel="noopener noreferrer">{ngo.website}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column justify-content-end">
          <a href="/ngoListing" className="btn btn-light btn-outline-dark mt-3 align-self-end" >Show More ...</a>
        </div>
      </div>
    </>
  );
};

export default BaseDashboard;
