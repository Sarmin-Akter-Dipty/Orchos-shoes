import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JwpU3Hb4iT0JD8GBxxDRBiwfIoS1BpttzaRbo7StoZAwnJzASmVEovckvoZLwBiSCi0L3joG2kwLAH9Jme4cRIG00MQsvh8eV')

const Payment = () => {
    const { itemId } = useParams()
    const [items, setItems] = useState({ item: { Name: '', Price: '' } })
    useEffect(() => {
        fetch(`https://guarded-hollows-10876.herokuapp.com/myorders/${itemId}`)

            .then(res => res.json())
            .then(data => {
                console.log(data.item.Name);
                setItems(data)
            })
    }, [itemId])
    // console.log(items.item.Price);
    return (
        <>
            {items && <div>

                <h3>Pay for:{items.item.Name}</h3>
                <h4>Pay:${items?.item.Price}</h4>
                {items?.item.Price && <Elements stripe={stripePromise}>
                    <CheckOutForm item={items} />
                </Elements>}
            </div>}
        </>
    );
};

export default Payment;