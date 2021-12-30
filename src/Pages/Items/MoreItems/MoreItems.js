import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../../Header/Header';
import useAuth from '../../hooks/UseAuth';
import MoreItem from './MoreItem';
import './MoreItem.css'

const MoreItems = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://guarded-hollows-10876.herokuapp.com/moreitems')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    };
    return (

        <div>
            <Header></Header>
            <div className='container mt-5 my-5  rounded-3 shadow-color' data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                <div className="row">
                    <h1 className="mt-5 mb-3 hover shoes-size">Our Shoes</h1>
                    {
                        users.map(user => <MoreItem key={user._id} user={user}></MoreItem>)
                    }

                </div>

            </div>
        </div>
    );
};

export default MoreItems;