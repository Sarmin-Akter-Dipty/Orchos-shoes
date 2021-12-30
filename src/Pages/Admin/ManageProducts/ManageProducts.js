import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    const [change, setChange] = useState(0)

    useEffect(() => {
        fetch('https://guarded-hollows-10876.herokuapp.com/moreitems')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [change]);
    const handleDelete = id => {
        const url = `https://guarded-hollows-10876.herokuapp.com/moreitems/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setChange(change + 1)
                if (data.deletedCount) {

                    swal('Deleted successfully')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })

    }
    return (
        <div>
            <Link to="/home" className="item px-3 py-1" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link>
            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <h1 className="item mb-4 mt-4">All Products : {services.length}</h1>
                <div className="row">


                    {
                        services?.map(service => <div key={service._id} className="col-md-3" data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" >
                            <div className="card text-center" data-aos="zoom-in" data-aos-duration="1000" >
                                <div className="overflow">
                                    <img src={service.img} alt="" className='card-img-top' data-aos="zoom-in" data-aos-duration="1000" />
                                    <h5 className="card-title hover">{service.Name}</h5>
                                    <h5 className='price'>{service?.Price}</h5>
                                    <button className="button-hover px-3 py-0 mt-2 mb-2" onClick={() => handleDelete(service._id)}>Delete</button>
                                </div>

                            </div>
                        </div >)
                    }
                </div>

            </div>
        </div>
    );
};

export default ManageProducts;