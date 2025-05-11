import React, {  useEffect, useState } from "react";
import {  useLoaderData, useNavigate, useParams } from "react-router";
import RightAside from "../../compontes/rightAside/RightAside";
import Header from "../../compontes/header/Header";


const NewsDetails = () => {
  const id = useParams();

  const data = useLoaderData();

  const [news, setNews] = useState({});
  const navigate = useNavigate()


  useEffect(() => {
    const findOut = data.find((news) => news?.id == id?.id);
    // console.log(findOut);
    setNews(findOut);
  }, [data, id]);



  return (
    <div>
      <Header />
      <div>
        <h1 className="font-bold text-xl mb-5 w-11/12 mx-auto">Dragon News</h1>
      </div>
      <div className="grid grid-cols-12 w-11/12 gap-6 mx-auto">
        <section className="col-span-9">
          <div className="card bg-base-100 w-full">
            <figure>
              <img
              className="w-full object-cover min-h-28 max-h-[450px]"
                src={news.image_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>
               {news.details}
              </p>
              <div className="card-actions ">
                <button onClick={()=>navigate(-1)} className="btn btn-secondary">Back to category</button>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightAside />
        </section>
      </div>
    </div>
  );
};

export default NewsDetails;
