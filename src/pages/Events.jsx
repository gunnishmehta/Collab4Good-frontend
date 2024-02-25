import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Events.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      id: "1",
      title: "Fundraiser Gala",
      description: "Annual gala event to raise funds for various projects.",
      date: "2024-03-15T00:00:00.000Z",
      location: "Grand Ballroom, XYZ Hotel",
      organizer: "Charity Foundation",
      ngo: "NGO_ID_1",
      donationTotal: 5000,
      donationGoal: 10000,
      donors: ["Donor_ID_1", "Donor_ID_2", "Donor_ID_3"]
    },
    {
      id: "2",
      title: "Community Cleanup Drive",
      description: "Volunteer event to clean up local parks and streets.",
      date: "2024-04-22T00:00:00.000Z",
      location: "City Park",
      organizer: "Green Earth Initiative",
      ngo: "NGO_ID_2",
      donationTotal: 2000,
      donationGoal: 3000,
      donors: ["Donor_ID_4", "Donor_ID_5"]
    },
    {
      id: "3",
      title: "Food Drive",
      description: "Collecting non-perishable food items for the homeless shelter.",
      date: "2024-05-10T00:00:00.000Z",
      location: "Local Supermarket",
      organizer: "Community Food Bank",
      ngo: "NGO_ID_3",
      donationTotal: 1500,
      donationGoal: 2000,
      donors: ["Donor_ID_6", "Donor_ID_7"]
    },
    {
      id: "4",
      title: "Blood Donation Camp",
      description: "Donate blood to save lives!",
      date: "2024-06-20T00:00:00.000Z",
      location: "Community Center",
      organizer: "Red Cross Society",
      ngo: "NGO_ID_4",
      donationTotal: 300,
      donationGoal: 500,
      donors: ["Donor_ID_8"]
    },
    {
      id: "5",
      title: "Educational Workshop",
      description: "Workshop to provide free tutoring for underprivileged students.",
      date: "2024-07-05T00:00:00.000Z",
      location: "Local Library",
      organizer: "Education For All Foundation",
      ngo: "NGO_ID_5",
      donationTotal: 800,
      donationGoal: 1000,
      donors: ["Donor_ID_9", "Donor_ID_10"]
    }
  ];
  
  
  const getBackgroundImageUrl = (index) => {
    return `/assets/eventsPage/event${index % 5 + 1}.png`; // Assuming there are 5 different images
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/events/all'); // Adjust the endpoint URL as needed
        // events = response.data.events // Assuming the response.data is an array of event objects
      } catch (error) {
        console.log('Error in fetching events: ', error.message);
      }
    }
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <>
      <Navbar />
      <div className="eventSection1">
        <h3 className='eventSection1-heading'>Events</h3>
      </div>
      <div className="eventContainer">
        <div className="event-row row">
          {Array.isArray(events)? (events.map(event => (
            <div className="col-md-4 d-flex" key={event.id}>
              <div className="card event flex-fill mb-4">
                <div className='event-picture rounded-top' style={{ backgroundImage: `url(${getBackgroundImageUrl(event.id)})` }}></div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text flex-grow-1">{event.description}</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Date:</strong> {event.date}</li>
                    <li className="list-group-item"><strong>Location:</strong> {event.location}</li>
                    <li className="list-group-item"><strong>Organizer:</strong> {event.organizer}</li>
                  </ul>
                  <div className="donationContainer">
                    <input type="range" name="donation" id={event.id} disabled={true} value={36} min={1} max={100} />
                    <div className='d-flex justify-content-between'>
                      <span><strong>$36,000</strong> raised</span>
                      <span className=''><strong>$100,000</strong> raised</span>
                    </div>
                  </div>
                  <Link to="/customngo" className="btn btn-lg custom-btn">Discover more</Link>
                </div>
              </div>
            </div>
          ))):(<p>Loading...</p>)}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
