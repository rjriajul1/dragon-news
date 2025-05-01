import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='flex flex-col justify-center mt-2 items-center'>
            <img src={logo} alt="" />
            <p className='text-accent my-3 text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-primary-content'>{moment().format('dddd, MMMM Do , yyyy')}</p>
            
        </div>
    );
};

export default Header;