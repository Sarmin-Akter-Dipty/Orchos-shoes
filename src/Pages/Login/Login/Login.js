import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/UseAuth';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const { user, authError, loginUser, isLoading, signInWithGoogle } = useAuth()
    console.log(user.email);
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        swal('Your login successfully added')


        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (

        <div className="row d-flex justify-content-center align-items-center">
            <Link to="/home" className="item px-3 py-1 mt-5 hover" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link>

            <div className="col-md-6 size border border-1" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">

                <h1 className="m-3 hover" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">Please Login</h1>
                {!isLoading && <form onSubmit={handleLoginSubmit} data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <input className="w-75" type="email" name="email" required placeholder="Your Email" onBlur={handleOnChange} />
                    <input className="w-75" type="password" name="password" required placeholder="Your Password" onBlur={handleOnChange} />
                    <button className="button-hover px-3 py-1 w-25 mb-3 mt-1" type="submit" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Login</button>
                    <Link className="item hover" to='/register'>New in here? Please Register</Link>
                </form>}
                {isLoading && <Spinner animation="border" variant="info" />}
                {(user?.email) ? <p className="text-info">Success</p> : <p></p>}

                {(authError) ? <p className="text-danger">{authError}</p> : <p></p>}


                <button className="button-hover px-3 py-1 w-25 mb-3 mt-1" onClick={handleGoogleSignIn} data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" >Google Sign In</button>


            </div>




        </div>
    );
};

export default Login;