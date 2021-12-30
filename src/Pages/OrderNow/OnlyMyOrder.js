import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../hooks/UseAuth';


const OnlyMyOrder = (props) => {
    const { _id, img, Name, Price } = props.order


    return (
        <div className="col-md-3">

        </div >
    );
};

export default OnlyMyOrder;