import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-to-top';
import useAuth from '../../hooks/UseAuth';
import Product from './Product';
import './Products.css'

const Products = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://guarded-hollows-10876.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="secondary" />
    };
    return (


        <div className='container mt-5 my-5  rounded-3 shadow-color' >
            <ScrollToTop smooth top={20} color='#f89dac' />
            <div className="row">
                <h1 className="mt-5 mb-4 hover shoes-size">Our Exclusive Collection</h1>
                {
                    users.map(user => <Product key={user._id} user={user}></Product>)
                }

            </div>

        </div>

    );
};

export default Products;