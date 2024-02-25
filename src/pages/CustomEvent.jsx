import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/CustomEvent.css";
import { Chart } from 'react-google-charts'
import RazorpayButton from "./RazorpayButton";

const CustomEvent = () => {
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
  const event = {
    name: "Food Drive",
    date: "May 10, 2024",
    organizer: "Community Food Bank",
    description: "Collecting non-perishable food items for the homeless shelter.",
    location: "Local Supermarket",
    topDonors: ["Donor_ID_6", "Donor_ID_7"]
  };
  

  return (
    <>
      <Navbar />

      <div className="eventSection1">
        <h3 className="eventSection1-heading">{event.name}</h3>
      </div>
      <div className="eventSection2 d-flex">
        <div className="customEventContainer">
          <div className="customEventDescription">
            <div className="customEventPicture"></div>
            <h2>{event.description}</h2>
            <p>Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
              passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
              don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks reasonable.</p>
          </div>
          <div className="customEventDonate">
            <div className="donationButton">
              <RazorpayButton />
            </div>
          </div>
          <div className="summary">
            <p>Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type simen book.</p>
            <ul className="summary-list">
              <li>Nsectetur cing do not elit.</li>
              <li>Suspe ndisse suscipit sagittis in Ieo.</li>
              <li>Entum estibulum dignissim lipsm posuere.</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has been the
              industry's standard dummy text ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.</p>
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
                {event.topDonors.map((donor, index) => (
                  <li key={index} className="text-success">
                    {donor}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
      {/* 
      <div className="container">
        <div className="event-section">
          
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default CustomEvent;