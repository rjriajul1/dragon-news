import React from 'react';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
            <header>
                this is header
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