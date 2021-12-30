import React from 'react';
import logo from '../Images/images-removebg-preview.png'
import './Footer.css'
import pay from '../Images/images.png'
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <ScrollToTop smooth top={20} color='#f89dac' />
            <div className='review-bg'>
                <div className="container mt-5  ">
                    <div className="row">
                        <div className="col-md-3 mt-5 mb-5" data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <div className='d-flex align-items-center'>
                                <img className='logo' src={logo} alt="" />
                                <h2 className='header'>Orchos</h2>
                                <br />
                            </div>
                            <p className='p-size-2 mt-3'><small>We Imported/Ship Over 30 Million Phone Around The World</small>
                            </p>
                            <p className='p-size-5'>Imported in Canada $ USA</p>
                            <p className='p-size-3'>+880170000000</p>

                        </div>
                        <div className="col-md-3 mt-5 " data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <p className='p-size-6 mt-4'>RESOURCES</p>
                            <p className='p-size-7'>Women's Shoes</p>
                            <p className='p-size-5'>Men's Shoes</p>
                            <p className='p-size-5'>Kid's Shoes</p>
                            <p className='p-size-5'>Sportswear</p>


                        </div>
                        <div className="col-md-3 mt-5 " data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <p className='p-size-6 mt-4'>COMPANY</p>
                            <p className='p-size-7'>About Orchos</p>
                            <p className='p-size-5'>Orchos Blog</p>
                            <p className='p-size-5'>Help Center</p>
                            <p className='p-size-5'>How it Works</p>
                        </div>
                        <div className="col-md-3 mt-5 " data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img className='mt-4 mb-4' src={pay} alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='d-lg-flex justify-content-evenly footer-bottom margin' >
                <p className='copy mt-4 mb-4'> <small>Copyright <u>Orchos Shoes</u> &copy;2021,All Rights Reserved</small></p>
                <div className='mt-4 icon d-flex'>
                    <p className='fav-margin'><i class="fab fa-facebook-square"></i></p>
                    <p className='fav-margin'><i class="fab fa-google"></i></p>
                    <p className='fav-margin'><i class="fab fa-twitter"></i></p>
                    <p className='fav-margin'><i class="fab fa-instagram-square"></i></p>
                    <p><i class="fab fa-vimeo-v"></i></p>
                    {/* <i class="fas fa-spinner fa-spin"></i> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;