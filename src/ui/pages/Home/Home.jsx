import { useState } from "react";
import logo from "../../../assets/Logo.svg";
import location from "../../../assets/location.png";
import calendar from "../../../assets/calendar.png";
import ship from "../../../assets/ship.png";
import blueship from "../../../assets/blue-ship.png";
import briefcase from "../../../assets/briefcase.png";
import sup24 from "../../../assets/i24support.png";
import globalsearch from "../../../assets/globalsearch.png";
import blueArrow from "../../../assets/arrowright.png";
import wave1 from "../../../assets/wave1.png";
import wave2 from "../../../assets/wave2.png";
import dollar from "../../../assets/dollarsquare.png";
import chatbtn from "../../../assets/Chat button.png";
export default function Home() {
  const [log, setLog] = useState(false);
  return (
    <div>
      <section className="home-page-section bg-F8F">
        <img src={chatbtn} className="chat-bot" alt="" />
        <header className="header d-flex">
          <div className="logo-box">
            <img src={logo} className="logo" alt="" />
          </div>
          {!log ? (
            <div className="d-flex align-items-center justify-content-center gap-20">
              <button
                onClick={() => {
                  alert("After Login");
                  setLog(true);
                }}
                className="primary-btn"
              >
                Login
              </button>
              <button className="secondary-btn">Learn more</button>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center gap-20">
              <img src={dollar} alt="" />
              <button className="primary-btn">Track shipment</button>
            </div>
          )}
        </header>
        <div className="home-page-heading">
          <h3 className="fx-42 text-center ">Hassle-Free Shipping Solutions</h3>
          <p className="fx-22 text-center mt-8">
            Compare, book, and manage your freight across the world’s top
            logistics providers, all on one platform.
          </p>
        </div>
        <div className="serch-bar-nav">
          <ul>
            <li>
              <img src={location} alt="icon" />
              Origin, Port, City
            </li>
            <li>
              <img src={location} alt="icon" />
              Destination, Port, City
            </li>
            <li>
              <img src={calendar} alt="icon" />
              13 April 2023
            </li>
            <li>
              <img src={ship} alt="icon" />
              Origin, Port, City
            </li>
            <li>
              <img src={blueArrow} alt="icon" />
            </li>
          </ul>
        </div>
        <div className="services-boxes">
          <h4 className="fx-33 w-100 text-center">Services</h4>
          <div className="services-box-frame">
            <div className="box">
              <h6 className="heading">
                <img src={blueship} alt="" />
                <span>Freight Services</span>
              </h6>
              <p className="fx-16 mt-20">
                Open new Opportunites to grow your busniess. Enter new markets
                and discover new contitnents, We are with you, door-to-door.
              </p>
            </div>
            <div className="box">
              <h6 className="heading">
                <img src={briefcase} alt="" />
                <span>Business Services</span>
              </h6>
              <p className="fx-16 mt-20">
                We support your goals for growth with cargo insurance, online
                payments and paperless workflow. Take your business to the next
                level.
              </p>
            </div>
            <div className="box">
              <h6 className="heading">
                <img src={globalsearch} alt="" />
                <span>Shipping & Logistics</span>
              </h6>
              <p className="fx-16 mt-20">
                Find powerful solutions to meet your diverse transportation
                needs. Agile solutions to handle all your supply chain needs.
              </p>
            </div>
            <div className="box">
              <h6 className="heading">
                <img src={sup24} alt="" />
                <span>24/7 Support</span>
              </h6>
              <p className="fx-16 mt-20">
                Receive support from our experts all over the world at every
                stage of the process, 24/7..
              </p>
            </div>
          </div>
        </div>
        <div className="wave-box">
          <img src={wave2} alt="" />
          <img src={wave1} alt="" />
        </div>
      </section>
    </div>
  );
}
