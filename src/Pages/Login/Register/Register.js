import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/UseAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location);

    const { user, authError, registerUser, isLoading } = useAuth()
    console.log(user.email);
    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            swal('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, navigate)

        swal("Your Register Successfully Added");
        e.preventDefault()
    }
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <Link to="/home" className="item px-3 py-1 mt-5 hover" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link>
            <div className="col-md-6 size border border-1">
                <h1 className="hover m-3" data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">Please Register</h1>
                {!isLoading && <form onSubmit={handleLoginSubmit} data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <input className="w-75" type="text" name="name" placeholder="Your Name" onBlur={handleOnChange} />
                    <input className="w-75" type="email" name="email" placeholder="Your Email" onBlur={handleOnChange} />
                    <input className="w-75" type="password" name="password" placeholder="Your Password" onBlur={handleOnChange} />
                    <input className="w-75" type="password" name="password2" placeholder="ReType Your Password" onBlur={handleOnChange} />
                    <button className="button-hover px-3 py-1 w-25 mb-3 mt-1" type="submit" data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Register</button>
                    <Link className="item hover" to='/login'>Already have an Account ? Please login</Link>
                </form>}
                {isLoading && <Spinner animation="border" variant="info" />}
                {(user?.email) ? <p className="text-primary">success</p> : <p></p>}

                {(authError) ? <p className=" text-danger">{authError}</p> : <p></p>}
            </div>



        </div>
    );
};

export default Register;