import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='my-4 flex gap-4 items-center bg-base-200 p-4'>
            <p className='btn btn-secondary font-semibold text-xl'>Latest</p>

        <Marquee className='flex gap-5' pauseOnHover={true} speed={70} style={{color:'red'}}>
        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aperiam?</p>

        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aperiam?</p>

        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aperiam?</p>

        <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aperiam?</p>
        </Marquee>
        </div>
    );
};

export default LatestNews;