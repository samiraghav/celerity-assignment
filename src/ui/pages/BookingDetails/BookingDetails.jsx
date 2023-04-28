import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Form from 'react-bootstrap/Form';

import logo from '../../../assets/Logo.svg';
import startfill from '../../../assets/fill-start.png';
import starte from '../../../assets/start-blank.png';
import shipimg from '../../../assets/ship-img.png';
import plane from '../../../assets/airplane.png';
import greeneclip from '../../../assets/EllipseGreen.png';
import location from '../../../assets/location.png';
import calendar from '../../../assets/calendar.png';
import ship from '../../../assets/ship.png';
import blueArrow from '../../../assets/edit2.png';
import dollar from "../../../assets/dollarsquare.png";
import chatbtn from '../../../assets/Chat button.png'
const steps = ['Search', 'Recommended services', 'Results', 'Booking'];
export default function BookingDetails() {
    return (
        <div>
            <section className="bookinDetails-page-section bg-F8F">
                <img src={chatbtn} className='chat-bot' alt=""/>
                <header className="header d-flex">
                    <div className="logo-box">
                        <img src={logo} className="logo" alt=""/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-20">
                        <img src={dollar} className='dolor-img' alt=""/>
                        <button className="primary-btn">Track shipment</button>
                    </div>
                </header>

                <div className="Booking-steps-bar">

                    <div className="steps-frame">
                        <Stepper activeStep={3} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                    </div>
                </div>

                <div className="serch-bar-nav bookingDetails-nav">
                    <ul>
                        <li className='black-393'><img src={location} alt="icon"/>
                            Delhi, 110003</li>
                        <li className='black-393'><img src={location} alt="icon"/>
                            Shanghai 200080</li>
                        <li className='black-393'><img src={calendar} alt="icon"/>
                            13 April 2023</li>
                        <li className='black-393'><img src={ship} alt="icon"/>
                            114.21KG - AIR</li>
                        <li className='black-393'><img src={blueArrow} alt="icon"/>
                        </li>
                    </ul>
                </div>
                <div
                    className="booking-main-frame d-flex  justify-content-center">
                    <div className="side-nave-filter">
                        <h3 className='fx-16  '>3 Top Quote
                            <span className=' fw-normal'>(6 in Total)</span>
                        </h3>
                        <ul>
                            <li>
                                <Form.Select
                                    className='select-option fx-16 '
                                    aria-label="Default select example">
                                    <option>Filters</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                            <li>
                                <Form.Select
                                    className='select-option fx-16 '
                                    aria-label="Default select example">
                                    <option>Price</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                            <li>
                                <Form.Select
                                    className='select-option fx-16 '
                                    aria-label="Default select example">
                                    <option>Modes</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                            <li>
                                <Form.Select
                                    className='select-option fx-16  '
                                    aria-label="Default select example">
                                    <option>Seller</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                        </ul>
                    </div>
                    <div className="booking-cards-frame">
                        <div className="top-booking-nav">
                            <div className="nav-one active-nav">Best Value 5-5 days. $3,121</div>
                            <div className="nav-one">Quickest 5-5 days. $3,121</div>
                            <div className="nav-one">Cheapest 5-5 days. $3,121</div>
                        </div>
                        <div className="">
                        <div className="all-bookin-card-frame">
                            <div className="booking-card-one">
                                <div className="left-content">
                                    <div className="shot-head w-100">
                                        <span className="notation">
                                            <img src={greeneclip} alt=""/>
                                            Best Value
                                        </span>
                                        <span className='express'>
                                            Express
                                        </span>
                                        <span className='no-day fx-11'>Est. 5 days</span>
                                    </div>
                                    <div className="locations-to-way">
                                        <ul>
                                            <li className='fx-13'><img src={location} alt=""/>110003, Delhi</li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li><img src={plane} alt=""/></li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li className='fx-13'><img src={location} alt=""/>200080, Shanghai</li>

                                        </ul>
                                    </div>
                                    <div className="reating-row d-flex align-items-center ">
                                        <span className="name-booking-flight fx-11">
                                            <img src={shipimg} alt=""/>
                                            Primetime Worldwide
                                        </span>
                                        <span className="reate-star">
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={starte} alt="icon"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h2 className='fx-19 fw-bolder'>$ 3,982. <span className='fx-13 text-black '>63</span></h2>
                                   <button className='primary-btn rounded-border'>Select</button>
                                <p className='fx-11 text-decoration-underline mb-0 '>View details</p>
                                </div>
                            </div>
                            <div className="booking-card-one">
                                <div className="left-content">
                                    <div className="shot-head w-100">
                                        <span className="notation">
                                            <img src={greeneclip} alt=""/>
                                            Best Value
                                        </span>
                                        <span className='express'>
                                            Express
                                        </span>
                                        <span className='no-day fx-11'>Est. 5 days</span>
                                    </div>
                                    <div className="locations-to-way">
                                        <ul>
                                            <li className='fx-13'><img src={location} alt=""/>110003, Delhi</li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li><img src={plane} alt=""/></li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li className='fx-13'><img src={location} alt=""/>200080, Shanghai</li>

                                        </ul>
                                    </div>
                                    <div className="reating-row d-flex align-items-center ">
                                        <span className="name-booking-flight fx-11">
                                            <img src={shipimg} alt=""/>
                                            Primetime Worldwide
                                        </span>
                                        <span className="reate-star">
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={starte} alt="icon"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h2 className='fx-19 fw-bolder'>$ 3,982. <span className='fx-13 text-black '>63</span></h2>
                                   <button className='primary-btn rounded-border'>Select</button>
                                <p className='fx-11 text-decoration-underline mb-0 '>View details</p>
                                </div>
                            </div>
                            <div className="booking-card-one">
                                <div className="left-content">
                                    <div className="shot-head w-100">
                                        <span className="notation">
                                            <img src={greeneclip} alt=""/>
                                            Best Value
                                        </span>
                                        <span className='express'>
                                            Express
                                        </span>
                                        <span className='no-day fx-11'>Est. 5 days</span>
                                    </div>
                                    <div className="locations-to-way">
                                        <ul>
                                            <li className='fx-13'><img src={location} alt=""/>110003, Delhi</li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li><img src={plane} alt=""/></li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li className='fx-13'><img src={location} alt=""/>200080, Shanghai</li>

                                        </ul>
                                    </div>
                                    <div className="reating-row d-flex align-items-center ">
                                        <span className="name-booking-flight fx-11">
                                            <img src={shipimg} alt=""/>
                                            Primetime Worldwide
                                        </span>
                                        <span className="reate-star">
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={starte} alt="icon"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h2 className='fx-19 fw-bolder'>$ 3,982. <span className='fx-13 text-black '>63</span></h2>
                                   <button className='primary-btn rounded-border'>Select</button>
                                <p className='fx-11 text-decoration-underline mb-0 '>View details</p>
                                </div>
                            </div>
                            <div className="booking-card-one">
                                <div className="left-content">
                                    <div className="shot-head w-100">
                                        <span className="notation">
                                            <img src={greeneclip} alt=""/>
                                            Best Value
                                        </span>
                                        <span className='express'>
                                            Express
                                        </span>
                                        <span className='no-day fx-11'>Est. 5 days</span>
                                    </div>
                                    <div className="locations-to-way">
                                        <ul>
                                            <li className='fx-13'><img src={location} alt=""/>110003, Delhi</li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li><img src={plane} alt=""/></li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li className='fx-13'><img src={location} alt=""/>200080, Shanghai</li>

                                        </ul>
                                    </div>
                                    <div className="reating-row d-flex align-items-center ">
                                        <span className="name-booking-flight fx-11">
                                            <img src={shipimg} alt=""/>
                                            Primetime Worldwide
                                        </span>
                                        <span className="reate-star">
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={starte} alt="icon"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h2 className='fx-19 fw-bolder'>$ 3,982. <span className='fx-13 text-black '>63</span></h2>
                                   <button className='primary-btn rounded-border'>Select</button>
                                <p className='fx-11 text-decoration-underline mb-0 '>View details</p>
                                </div>
                            </div>
                            <div className="booking-card-one">
                                <div className="left-content">
                                    <div className="shot-head w-100">
                                        <span className="notation">
                                            <img src={greeneclip} alt=""/>
                                            Best Value
                                        </span>
                                        <span className='express'>
                                            Express
                                        </span>
                                        <span className='no-day fx-11'>Est. 5 days</span>
                                    </div>
                                    <div className="locations-to-way">
                                        <ul>
                                            <li className='fx-13'><img src={location} alt=""/>110003, Delhi</li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li><img src={plane} alt=""/></li>
                                            <li>
                                                <span className='hr-line'></span>
                                            </li>
                                            <li className='fx-13'><img src={location} alt=""/>200080, Shanghai</li>

                                        </ul>
                                    </div>
                                    <div className="reating-row d-flex align-items-center ">
                                        <span className="name-booking-flight fx-11">
                                            <img src={shipimg} alt=""/>
                                            Primetime Worldwide
                                        </span>
                                        <span className="reate-star">
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={startfill} alt="icon"/>
                                            <img src={starte} alt="icon"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h2 className='fx-19 fw-bolder'>$ 3,982. <span className='fx-13 text-black '>63</span></h2>
                                   <button className='primary-btn rounded-border'>Select</button>
                                <p className='fx-11 text-decoration-underline mb-0 '>View details</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
