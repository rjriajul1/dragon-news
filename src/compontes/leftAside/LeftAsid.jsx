import React, { Suspense } from 'react';
import Categories from '../categories/Categories';

const LeftAsid = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
             <Categories/> 
            </Suspense> 
        </div>
    );
};

export default LeftAsid;