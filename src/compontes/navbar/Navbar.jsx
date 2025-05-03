// import React, { use } from 'react';
import userImg from '../../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
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
                <Link to='/auth/login' className='btn btn-primary text-accent w-44 text-2xl'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;