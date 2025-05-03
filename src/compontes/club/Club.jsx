import React from 'react';
import sprot1 from '../../assets/sprot_1.jpg'
import sprot2 from '../../assets/sports_2.jpg'

const Club = () => {
    return (
        <div>
           <div className='mb-4 mt-6'>
           <img src={sprot1} alt="" />
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className='flex gap-4 text-accent'>
            <span>Sports</span>
            <p>jon 4, 2022</p>
            </div>
           </div>

           <div className='mb-4'>
           <img src={sprot2} alt="" />
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className='flex gap-4 text-accent'>
            <span>Sports</span>
            <p>jon 4, 2022</p>
            </div>
           </div>
           <div>
           <img src={sprot1} alt="" />
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className='flex gap-4 text-accent'>
            <span>Sports</span>
            <p>jon 4, 2022</p>
            </div>
           </div>
        </div>
    );
};

export default Club;