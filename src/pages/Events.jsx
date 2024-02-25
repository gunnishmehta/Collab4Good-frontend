import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Events.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/events/all'); // Adjust the endpoint URL as needed
        setEvents(response.data.events); // Assuming the response.data is an array of event objects
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
                <div className='event-picture rounded-top'></div>
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
