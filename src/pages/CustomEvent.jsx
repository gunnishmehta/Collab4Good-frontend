import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CustomEvent.css";
import { Chart } from 'react-google-charts'
import RazorpayButton from "./RazorpayButton";
import axios from 'axios';

const CustomEvent = () => {
  const [event, setEvent] = useState(null); // Initialize event state as null

  const data = [
    ["Company", "Thousands of dollars"],
    ["A", 11],
    ["B", 2],
    ["C", 2],
    ["D", 2],
    ["E", 7],
  ];
  const options = {
    is3D: true,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/events/get'); // Adjust the endpoint URL as needed
        setEvent(response.data); // Assuming the response.data is an event object
      } catch (error) {
        console.log('Error in fetching event: ', error.message);
      }
    }
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <>
      <Navbar />
      {event ? (
        <div>
          <div className="eventSection1">
            <h3 className="eventSection1-heading">{event.name}</h3>
          </div>
          <div className="eventSection2 d-flex">
            <div className="customEventContainer">
              <div className="customEventDescription">
                <div className="customEventPicture"></div>
                <h2>{event.title}</h2> {/* Use event.title for the event title */}
                <p>{event.description}</p> {/* Use event.description for the event description */}
              </div>
              <div className="customEventDonate">
                <div className="donationButton">
                  <RazorpayButton />
                </div>
              </div>
              {/* Other content */}
            </div>
            <div className="customEventCreated">
              <div className="event-info">
                <div className="event-details" style={{ fontSize: "1.2rem", color: "navy" }}>
                  <div className="event-details-row">
                    <strong>Date:</strong> {event.date}
                  </div>
                  <div className="event-details-row">
                    <strong>Organizer:</strong> {event.organizer}
                  </div>
                </div>
              </div>
              <div className="event-description">
                <div className="top-donors">
                  <h4 className="text-primary">Top Donors:</h4>
                  <ul>
                    {Array.isArray(event.topDonors) ? event.topDonors.map((donor, index) => (
                      <li key={index} className="text-success">
                        {donor}
                      </li>
                    )) : <p>Loading...</p>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4">Donations Received</h2>
            <div className="row">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
};

export default CustomEvent;
