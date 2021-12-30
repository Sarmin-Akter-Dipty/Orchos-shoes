import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

const OrderNow = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { user } = useAuth();

    console.log(item);
    useEffect(() => {

        fetch(`https://guarded-hollows-10876.herokuapp.com/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    const {
        register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        data.item = item;
        data.status = 'Pending'
        fetch("https://guarded-hollows-10876.herokuapp.com/orders", {
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
        <div className='container'>

            <div className="row my-5">
                <div className="col-md-2 mt-5" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" >
                    <div className="card text-center mt-5" data-aos="zoom-in" data-aos-duration="2000" >
                        <div className="overflow">
                            <img src={item?.img} alt="" className='card-img-top' data-aos="zoom-in" data-aos-duration="2000" />
                        </div>
                        <div className="card-body text-dark" data-aos="zoom-in" data-aos-duration="2000">
                            <h5 className="card-title hover">{item?.Name}</h5>

                            <p className='p-size-0'>{item?.Description}</p>
                            <h5 className='price'>{item?.Price}</h5>
                        </div>


                    </div>
                </div >
                <div className="col-md-10">
                    <h1 className="text-center"> Fill up your form</h1>
                    <div className="w-25 m-auto mt-5 card ">
                        <div className="container border border d-flex justify-content-center align-items-center mt-5">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} {...register("name")} placeholder="Name" className="p-2 " /> <br />
                                    <input defaultValue={user.email}  {...register("email", { required: true })} placeholder="Email" className="p-2 m-2" />  <br />
                                    <input {...register("date", { required: true })} placeholder="date" defaultValue={new Date()} className="p-2 m-2" />
                                    <br />
                                    <input {...register("address", { required: true })} placeholder="Address" className="p-2 m-2" />
                                    <br />
                                    <input {...register("number", { required: true })} placeholder="Phone Number" className="p-2 m-2" />
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input type="submit" className="button-hover w-50 my-3" />
                                </form>
                                {/* <p className="m-2 mb-2"> Already have account?{" "}
                                    <Link to="/login">
                                        <span className="text-warning">Create an account</span>
                                    </Link>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {user?.email && <Link to="/dashboard"><button className=" button-hover px-4 py-2 mt-4 margin-0">DashBoard</button></Link>}
            </div>
        </div>
    );
};

export default OrderNow;
