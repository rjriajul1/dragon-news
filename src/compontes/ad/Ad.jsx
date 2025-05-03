import React from 'react';
import adImg from '../../assets/bg.png'

const Ad = () => {
    return (
        <div className='mt-5 flex justify-center'>
            <img className='w-full rounded-2xl' src={adImg} alt="" />
        </div>
    );
};

export default Ad;