import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet, } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';



const DashBoard = () => {
    const { user, admin, logOut } = useAuth();
    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">

            <div className="row">
                <div className='col-md-2 mt-3 colum-border'>

                    <br />
                    <br />
                    <br />

                    {user?.email && !admin && <Link to="/myorders" className=" item">My Orders</Link>}
                    <br />

                    {user?.email && !admin && <Link to="/addReview" className="item">Add Reviews</Link>}



                    {user?.email && !admin && <button onClick={logOut} className=" button-hover px-3 py-1 border-3 my-5 mx-2">Log Out</button>}


                    {admin && <>
                        <Link className="dashboard item" to={`/dashboard/manageproducts`}>Manage All Products</Link>
                        <br />
                        <br />
                        <Link className=" dashboard item" to={`/dashboard/manageallorders`}>Manage All Orders</Link>
                        <br />
                        <br />
                        <Link className="dashboard item" to={`/dashboard/additems`}>Add Items</Link>
                        <br />
                        <br />
                        <Link className="dashboard item" to={`/dashboard/makeAdmin`}>Make Admin</Link>

                    </>}




                </div>

                <div className="col-md-10 ms-auto ">
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5 d-sm-block d-none ">
                        <div className="container">
                            <h2 className="navbar-brand style1 text-white">DashBoard</h2>
                        </div>
                    </nav>

                    <Outlet></Outlet>


                </div>



            </div>
            <br />
            <Link to="/home" className="button-hover px-3 py-1" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link>
        </div>
    )

};

export default DashBoard;