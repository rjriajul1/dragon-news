import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import News from '../news/News';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData()
    const [categoryNews,setCategoryNews] = useState([])
   

    useEffect(()=>{
        if(id === '0'){
          setCategoryNews(data)
        }else if(id === '1'){
            const filterNews = data.filter(breakingNews => breakingNews.others.is_today_pick === true);
            setCategoryNews(filterNews)
        }else{
            const filterNews = data.filter(news => news.category_id === parseInt(id) );
            setCategoryNews(filterNews)
        }
    },[id,data])
   

    return (
        <div>
            <h1 className='font-bold text-primary-content'>Total {categoryNews.length} news found</h1>

         <div className='mt-5'>
            {
                categoryNews.map(news=><News key={news.id} news={news}></News>)
            }
         </div>

        </div>
    );
};

export default CategoryNews;