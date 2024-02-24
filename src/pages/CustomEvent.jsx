import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CustomEvent.css";

const CustomEvent = () => {
  const event = {
    name: "Charity Fundraiser",
    date: "February 20, 2024",
    organizer: "Charity Foundation",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32",
    location: "Community Center",
    topDonors: ["John Doe", "Jane Doe", "Bob Smith"],
  };

  return (
    <>
      <Navbar />
      <div className="eventSection1">
        <h3 className="eventSection1-heading">{event.name}</h3>
      </div>
      <div className="container">
        <div className="event-section">
          <div className="event-info">
            <h3 className="event-heading">{event.name}</h3>
            <div className="event-details" style={{ fontSize: "1.2rem", color: "navy" }}>
              <div className="event-details-row">
                <strong>Date:</strong> {event.date}
              </div>
              <div className="event-details-row">
                <strong>Organizer:</strong> {event.organizer}
              </div>
              <div className="donationContainer mt-4">
                <input
                  type="range"
                  name="donation"
                  id={event.id}
                  disabled={true}
                  value={36}
                  min={1}
                  max={100}
                />
                <div className="d-flex justify-content-between">
                  <span>
                    <strong>$36,000</strong> raised
                  </span>
                  <span>
                    <strong>$100,000</strong> raised
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="event-description">
            <p>{event.description}</p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <div className="top-donors">
              <h4 className="text-primary">Top Donors:</h4> {/* Increased size and added color */}
              <ul>
                {event.topDonors.map((donor, index) => (
                  <li key={index} className="text-success"> {/* Highlighting with color */}
                    {donor}
                  </li>
                ))}
              </ul>
              <div className="event-buttons">
                <button className="btn btn-primary btn-lg mr-2 joinbtn">Join</button>{"                  "}
                <button className="btn btn-success btn-lg">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomEvent;
