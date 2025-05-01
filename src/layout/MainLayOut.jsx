import React from 'react';
import { Outlet } from 'react-router';
import Header from '../compontes/header/Header';

const MainLayOut = () => {
    return (
        <div>
            <header>
                <Header/>
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