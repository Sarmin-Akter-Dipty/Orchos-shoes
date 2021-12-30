import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(null)
    useEffect(() => {
        fetch("https://guarded-hollows-10876.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [status]);


    console.log(orders);
    const handleDelete = email => {
        const proceed = window.confirm('Are you sure ,you wanted delete?');
        if (proceed) {
            const url = `https://guarded-hollows-10876.herokuapp.com/allOrders/${email}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {

                        swal('Deleted successfully')
                        const remaining = orders.filter(order => order._id !== email)
                        setOrders(remaining);

                    }
                })
        }
    }

    const approveOrder = id => {
        const url = `https://guarded-hollows-10876.herokuapp.com/myorders?id=${id}`
        fetch(url, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setStatus(!status)
                }
                else {
                    setStatus(false)
                }
            })
    }
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" container>


                <div className="row">

                    <h1 className="item hover mb-4">All Orders: {orders.length}</h1>

                    {orders?.map(order => <div key={order._id} className="col-md-3" data-aos="fade-up"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" >
                        <div className="card text-center" data-aos="zoom-in" data-aos-duration="2000" >
                            <div className="overflow">
                                <img src={order?.item.img} alt="" className='card-img-top' data-aos="zoom-in" data-aos-duration="2000" />
                                <h5 className="card-title hover">{order.item.Name}</h5>
                                <h5>{order.email}</h5>
                                <h5>{order.address}</h5>
                                <h4>Status: <span className="text-primary">{order.status}</span></h4>
                                <div className='d-flex justify-content-center mt-4'>
                                    <button className="button-hover px-2 py-0 mx-2 " onClick={() => handleDelete(order._id)}>Delete</button>
                                    <button className="button-hover px-2 py-0 " onClick={() => approveOrder(order._id)}>Approve</button>
                                </div>
                            </div>

                        </div>
                    </div >)}

                </div>
            </div>
            <br />
        </div>
    );
};

export default ManageAllOrders;