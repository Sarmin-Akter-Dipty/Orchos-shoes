import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>

            <div className='review-bg container-fluid'>
                <Header></Header>
                <h1 className='mb-5 mt-5' data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">404</h1>
                <h4 className='mt-5 mb-5' data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">Page Not Found</h4>
                <Link to="/home" className="item px-3 py-1" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default NotFound;