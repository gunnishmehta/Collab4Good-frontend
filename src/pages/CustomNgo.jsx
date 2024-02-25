import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Customngo.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNGO = () => {
  const ngo = {
    name: "Save the Children",
    mission:
      "To improve the lives of children through better education, healthcare, and opportunities.",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32",
    location: "Community Center",
    website: "https://www.savethechildren.org/",
    topDonors: ["John Doe", "Jane Doe", "Bob Smith"],
    events: [
      {
    name: "Food Drive",
    date: "May 10, 2024",
    organizer: "Community Food Bank",
    description: "Collecting non-perishable food items for the homeless shelter.",
    location: "Local Supermarket",
    topDonors: ["Donor_ID_6", "Donor_ID_7"]
  }
    ],
  };

  return (
    <>
      <Navbar />
      <div className="ngosection1">
        <h3 className="ngoSection1-heading">{ngo.name}</h3>
      </div>
      <div className="container">
        <div className="ngo-section">
          <div className="ngo-info">
            <h3 className="ngo-heading">{ngo.name}</h3>
            <div
              className="ngo-details"
              style={{ fontSize: "1.2rem", color: "navy" }}
            >
              <div className="ngo-details-row">
                <strong>Mission:</strong> {ngo.mission}
              </div>
              <div className="ngo-details-row">
                <strong>Website:</strong> {ngo.website}
              </div>
              <div className="donationContainer mt-4">
                <div className="ngo-details-row">
                  <strong>Cover Image:</strong> {ngo.website}
                </div>
              </div>
            </div>
          </div>
          <div className="ngo-description">
            <p>{ngo.description}</p>
            <p>
              <strong>Location:</strong> {ngo.location}
            </p>
            {ngo.events.map((event) => (
              <div className="col-md-6 d-flex" key={event.id}>
                <div className="card event flex-fill mb-4">
                  <div className="ngo-picture rounded-top"></div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{event.name}</h5>{" "}
                    {/* Changed ngo.event.name to event.name */}
                    <p className="card-text flex-grow-1">
                      {event.description}
                    </p>{" "}
                    {/* Changed ngo.event.description to event.description */}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Date:</strong> {event.date}
                      </li>
                      <li className="list-group-item">
                        <strong>Location:</strong> {event.location}
                      </li>
                      <li className="list-group-item">
                        <strong>Organizer:</strong> {event.organizer}
                      </li>
                    </ul>
                    <div className="donationContainer">
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
                        <span className="">
                          <strong>$100,000</strong> raised
                        </span>
                      </div>
                    </div>
                  <Link to="/customngo" className="btn btn-lg custom-btn">Discover more</Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="top-donors">
              <h4 className="text-primary">Top Donors:</h4>{" "}
              {/* Increased size and added color */}
              <ul>
                {ngo.topDonors.map((donor, index) => (
                  <li key={index} className="text-success">
                    {" "}
                    {/* Highlighting with color */}
                    {donor}
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomNGO;
