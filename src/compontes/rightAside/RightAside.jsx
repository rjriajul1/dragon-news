import React from 'react';
import Login from '../login/Login';
import FindUs from '../findUs/FindUs';
import QZone from '../qZone/QZone';
import Ad from '../ad/Ad';

const RightAside = () => {
    return (
        <div>
             <h1 className='font-semibold text-xl'>Login With</h1>
            <Login></Login>
            <FindUs/>
            <QZone/>
            <Ad/>
        </div>
    );
};

export default RightAside;