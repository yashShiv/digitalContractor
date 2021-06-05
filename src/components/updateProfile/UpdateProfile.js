import React from 'react';
import {useLocation} from 'react-router-dom';
import UpdateCustomerProfile from './UpdateCustomerProfile';
import UpdateServiceProfile from './UpdateServiceProfile';

const UpdateProfile = () => {
    const type = localStorage.getItem('type');
    const location = useLocation();
    const data = location.state.data;
    return (
        type === 'customer'
        ?
        <UpdateCustomerProfile data={data} />
        :
        <UpdateServiceProfile data={data} />
    )
}

export default UpdateProfile;