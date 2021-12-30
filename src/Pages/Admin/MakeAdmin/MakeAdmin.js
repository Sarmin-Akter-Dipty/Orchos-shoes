import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email }
        console.log(user);
        fetch('https://guarded-hollows-10876.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')

                    setSuccess(true)
                }

            })
        e.preventDefault()
    }

    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div>
                <div data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000">
                    <h2 className="text">Make An Admin</h2>
                    <form onSubmit={handleAdminSubmit}>
                        <input onChange={handleEmail} value={email} className="rounded w-25 " type="email" name="email" placeholder="Your Email" />
                        <button className="button-hover px-2 py-1 mb-3 mt-2 mx-2" type="submit">Make Admin</button>
                    </form>
                    {success && alert('Make Admin Successfully')}
                </div>


            </div>

        </div>

    );
};

export default MakeAdmin;