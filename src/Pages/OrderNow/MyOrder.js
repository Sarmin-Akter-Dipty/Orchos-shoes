import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../hooks/UseAuth';
const MyOrder = (item) => {
    const [myOrders, setMyOrders] = useState([])
    const [status, setStatus] = useState(null)
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://guarded-hollows-10876.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data)
            })

    }, [user.email, status])
    console.log(myOrders);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ,you wanted delete?');
        if (proceed) {
            const url = `https://guarded-hollows-10876.herokuapp.com/allOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {

                        swal('Deleted successfully')
                        const remaining = myOrders.filter(order => order._id !== id)
                        setMyOrders(remaining);

                    }
                })
        }
    }
    console.log(myOrders);

    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5 ">
                <div className="container">
                    <h2 className="navbar-brand style1 text-white">DashBoard</h2>
                </div>
            </nav>
            <h2 data-aos="zoom-in" data-aos-duration="2000">My Orders : {myOrders.length}</h2>
            {!myOrders.length && <h2 className="mt-5" data-aos="zoom-in" data-aos-duration="2000">You Have No Orders Plz Place The Order</h2>}


            <div className="container">
                <div className="row">
                    {
                        myOrders?.map(order => <div key={order.item._id} className="col-md-3" data-aos="fade-up"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000" >
                            <div className="card text-center" data-aos="zoom-in" data-aos-duration="2000" >
                                <div className="overflow">
                                    <img src={order?.item.img} alt="" className='card-img-top' data-aos="zoom-in" data-aos-duration="2000" />
                                    <h5 className="card-title hover">{order.item.Name}</h5>
                                    <h5 className="price">{order.item.price}</h5>
                                    <h4>Status: <span className="text-primary">{order.status}</span></h4>
                                    <button className="button-hover px-2 py-0 my-4 mx-2" onClick={() => handleDelete(order._id)}>Delete</button>
                                    {order?.item.payment?.last4 ? 'paid' : <Link to={`/dashboard/payment/${order?._id}`}><button

                                        className="button-hover px-2 py-0 my-4 mx-2">Pay $ {order.item.price}</button></Link>}
                                </div>

                            </div>
                        </div >)
                    }
                </div>


            </div>

            <Link to="/home" className="button-hover px-3 py-1" data-aos="zoom-in" data-aos-duration="2000"> Go Home</Link>
        </div>
    );
};

export default MyOrder;