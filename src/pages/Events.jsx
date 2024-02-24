import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
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

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Upcoming Events</h2>
        <div className="row">
          {events.map(event => (
            <div className="col-md-6 d-flex" key={event.id}>
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
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
