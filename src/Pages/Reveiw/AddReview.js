import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("https://guarded-hollows-10876.herokuapp.com/addReview", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
        reset()
    };
    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5 ">
                <div className="container">
                    <h2 className="navbar-brand style1 text-white">DashBoard</h2>
                </div>
            </nav>
            <h1 className=" m-4" data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">Customers Review</h1>

            <div data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field w-50 mb-1"
                        name="email"
                        value={user?.email}
                        type="email"
                        {...register("email", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="comments"
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50 mb-1"
                        name="rating"
                        placeholder="Rating"
                        {...register("rating", { required: true })}
                    />
                    <br />

                    <input
                        className="submit-btn button-hover px-3 py-1 mt-3"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
            <br />
            <Link to="/home" className="button-hover px-3 py-1"> Go Home <FontAwesomeIcon icon={faSignInAlt} /></Link>
        </div>
    );
};

export default AddReview;