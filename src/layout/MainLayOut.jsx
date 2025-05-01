import React from 'react';
import { Outlet } from 'react-router';
import Header from '../compontes/header/Header';
import LatestNews from '../compontes/latestNews/LatestNews';
import Navbar from '../compontes/navbar/Navbar';

const MainLayOut = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews/>
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar/>
                </nav>
            </header>
            <main>
                <aside>
                    left side
                </aside>
                <section>
                    <Outlet/>
                </section>
                <aside >
                    right side 
              
                </aside>
            </main>
        </div>
    );
};

export default MainLayOut;