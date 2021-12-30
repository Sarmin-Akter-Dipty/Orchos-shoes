import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import './AddItems.css'

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://guarded-hollows-10876.herokuapp.com/items', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal('Added successfully')
                    reset()
                }
            })
    }
    return (
        <div className="row" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className="col-md-1">
                <img className="margin-right" src="" alt="" />
            </div>
            <div className="col-md-10 add-service">

                <h2 className='item hover mb-3'>Add A New Phone</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea className="" {...register("description")} placeholder="Description" />
                    <input className="" type="number" {...register("price")} placeholder="Price" />
                    <input className="" {...register("img")} placeholder="Image url" />
                    <input className="button-hover" type="submit" />
                </form>

            </div>
            <div className="col-md-1">
                <img className="margin-left" src="" alt="" />
            </div>


        </div>

    );
};


export default AddItems;