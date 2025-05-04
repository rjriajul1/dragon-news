import React from 'react';
import Navbar from '../compontes/navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-2'>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;