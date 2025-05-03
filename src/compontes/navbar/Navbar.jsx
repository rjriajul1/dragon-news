import React from 'react';
import userImg from '../../assets/user.png'
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div>
                <ul className='flex gap-5 text-accent'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/career'>Career</NavLink></li>
                 
                </ul>
            </div>
            <div className='flex gap-5'>
                <img src={userImg} alt="" />
                <button className='btn btn-primary text-accent w-44 text-2xl'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;