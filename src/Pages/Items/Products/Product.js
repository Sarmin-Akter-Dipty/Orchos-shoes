import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //distructuring
    const { _id, img, Name, Price } = props.user
    return (
        <div className="col-md-3" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" >
            <div className="card text-center" data-aos="zoom-in" data-aos-duration="2000" >
                <div className="overflow">
                    <img src={img} alt="" className='card-img-top' data-aos="zoom-in" data-aos-duration="2000" />
                </div>
                <div className="card-body text-dark" data-aos="zoom-in" data-aos-duration="2000">
                    <h5 className="card-title hover">{Name}</h5>
                    <h5 className='price'>$ {Price}</h5>
                </div>
                <Link to={`/ordernow/${_id} `} className='cart' >
                    <FontAwesomeIcon icon={faCartArrowDown} />  Add To Cart
                </Link>

            </div>
        </div >
    )
};

export default Product;