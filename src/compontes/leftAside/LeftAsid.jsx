import React, { Suspense } from 'react';
import Categories from '../categories/Categories';
import Club from '../club/Club';

const LeftAsid = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
             <Categories/> 
            </Suspense> 
            <Club/>
        </div>
    );
};

export default LeftAsid;