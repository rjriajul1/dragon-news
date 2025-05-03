import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then(res=>res.json())


const Categories = () => {
    const data = use(categoriesPromise);
    return (
        <div>
             <h1 className='font-bold text-primary-content'>All Categories</h1>

             <div className='flex flex-col gap-4 mt-5  '>
                {
                    data.map(category=><NavLink className='btn btn-base-200 border-0 text-accent' to={`/categoryNews/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
             </div>
        </div>
    );
};

export default Categories;

