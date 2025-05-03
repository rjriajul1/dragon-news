import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import palyImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 mt-8 p-4 space-y-4 rounded-2xl'>
            <h1 className='font-bold text-gray-700'>Q-Zone</h1>
           <div className='flex flex-col items-center'>
           <img src={swimmingImg} alt="" />
            <img src={classImg} alt="" />
            <img src={palyImg} alt="" />
           </div>
        </div>
    );
};

export default QZone;