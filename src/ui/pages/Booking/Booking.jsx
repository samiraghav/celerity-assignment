// import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import logo from '../../../assets/Logo.svg';
import bottemship from '../../../assets/bottom-ship.png';
import xcover from '../../../assets/Xcover.png';
import shiper from '../../../assets/know-shipper.png';
import load from '../../../assets/load-img.png';
import weightm from '../../../assets/weightmeter.png';
import placeone from '../../../assets/oneplace.png';
import planeLine from '../../../assets/aroplane-line.png';
import dollar from "../../../assets/dollarsquare.png";
import chatbtn from '../../../assets/Chat button.png'
const steps = ['Search', 'Recommended services', 'Results', 'Booking'];

function Booking() {
    return (
        <div>
            <section>
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

                    <div className="steps-frame bookin-only">
                        <Stepper activeStep={0} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                    </div>
                </div>
                <div className="main-frame-wrapper d-flex">
                    <div
                        className="bookin-price-frame d-flex align-items-center justify-content-between flex-column">
                        <div className="bookin-summary-frame">
                            <div className="bookin-sum-content">
                                <h4 className='fx-23 '>Booking summary</h4>
                                <p className='fx-13 text-center w-100 mb-0'>Express</p>
                                <div className="form-to-where d-flex align-items-center justify-content-center">
                                    <img src={placeone} alt=""/>
                                    <img src={planeLine} alt=""/>
                                    <img src={placeone} alt=""/>
                                </div>
                                <div
                                    className="location-add-frame d-flex align-items-center justify-content-center">
                                    <h3 className='fx-19'>Delhi,<br/>
                                        110003 India</h3>
                                    <h3 className='fx-19'>Shanghai,<br/>
                                        200080, China
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div
                            className="total-w-load-frame d-flex align-items-start justify-content-center">
                            <div className="total-weight">
                                <p className='fx-19'>Total Weight/Volume</p>
                                <img src={weightm} alt=""/>
                                <p className='fx-19'>114.21KG</p>
                            </div>
                            <div className="load-frame">
                                <p className='fx-19 text-start mb-0'>Load</p>
                                <div className="load-content">
                                    <img src={load} alt=""/>
                                    <p className='fx-19 mb-0'>Pallets</p>
                                    <p className='fx-19 text-center'>230 X 140 X 120 CM</p>
                                </div>
                            </div>

                        </div>
                        <div className="botttom-frame-content ">
                            <div className="left-content-b w-50">
                                <p className='fx-19 text-start w-100'>Seller: Primetime Worldwide</p>
                                <img src={bottemship} alt=""/>
                            </div>

                            <div className="right-conntetn-b w-50 ">
                                <p className='fx-19 text-start w-100'>Insurance:Xcover.com</p>
                                <img src={xcover} alt=""/>
                            </div>

                        </div>
                    </div>
                    <div className="total-price-details">
                    <h4 className='fx-23 mb-0'>Price details <img src={shiper} alt="" className='know-shipper' /></h4>
                    <div className="d-flex align-items-center justify-content-between padding-pricing ">
                        <p className='mb-0 fx-16'>Seller’s Quote</p>
                        <p className='mb-0 fx-16'>$ 3,659.25</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-26 ">
                        <p className='mb-0 fx-16'>Duties and taxes</p>
                        <p className='mb-0 fx-16'>Not Included</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-15 pb-26 boder-bottom">
                        <p className='mb-0 fx-16'>Insurance <br/><span className='fx-13'>Based on the items cost</span></p>
                        <p className='mb-0 fx-16'>$323.40</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-26 ">
                        <p className='mb-0 fx-16'>Add a  <span className=' text-primary text-decoration-underline'>promo code</span></p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-15 pb-26  boder-bottom">
                        <p className='mb-0 fx-16'>Platform fee</p>
                        <p className='mb-0 fx-16'>$119.48</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-26 pb-26  ">
                        <h2 className='mb-0 fx-28'>Total:</h2>
                        <h2 className='mb-0 fx-28'>$ 4,102.13</h2>
                    </div>
                    <button className='primary-btn-sec w-100 fx-23 text-white mt-26'>Checkout</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Booking