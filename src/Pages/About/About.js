import React from 'react';
import owner from '../Images/owner.jpg'
import showrm from '../Images/Showrm.jpg'
import showrm4 from '../Images/owner-cutomer.jpg'
import './About.css'


const About = () => {
    return (
        <div className=''>
            <div className="container" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <div className='d-lg-flex justify-content-center mt-4' >
                    <div className="col-md-7">
                        <h3 className='hover'>About Us</h3>
                        <h5>Owner,Valuable Customer & Display</h5>
                        <small className='text-size'>We are friendly and dedicated for our selling.We Ship Over 30 Million Phone Around The World So Please Place The Order.Find The Perfect Shoes For Those Closest To You So Please Place The Order.</small>
                    </div>
                </div>
                <div className="row d-lg-flex justify-content-center">
                    <div className="col-md-9">
                        <div className='body'>
                            <div className='main'>
                                <div className="hex-1" data-aos="zoom-in"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <img className="clip" src={owner} alt="" />
                                    <div className="overlay">
                                        <div className="details">
                                            <h3 className='hover'>Owner</h3>
                                            <h5>Sheikh Usman</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="hex-1" data-aos="zoom-in"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <img className="clip img-width" src={showrm4} alt="" />
                                    <div className="overlay">
                                        <div className="details">
                                            <h2 className='hover'>Showroom</h2>
                                            <h5 className='hover'>Owner and valuable Customer</h5>
                                            <small className='p-size'>We are friendly and dedicated for our selling.We Ship Over 30 Million Phone Around The World So Please Place The Order.Find The Perfect Shoes For Those Closest To You So Please Place The Order.</small>

                                        </div>
                                    </div>
                                </div>
                                <div className="hex-1" data-aos="zoom-in"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000">
                                    <img className="clip" src={showrm} alt="" />
                                    <div className="overlay">
                                        <div className="details">
                                            <h2 className='hover'>Showroom</h2>
                                            <h4>Address <h6>123 Main Street, New York, NY 10030</h6></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default About;