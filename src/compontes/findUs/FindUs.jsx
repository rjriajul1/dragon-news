import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold text-gray-700 mt-5">Find Us On</h1>
      <div className="mt-5">
        <button className="btn justify-start w-full">
          <FaFacebook size={20}/>
          Facebook
        </button>
        <button className="btn justify-start w-full ">
          <FaTwitter size={20} />
          Twitter
        </button>
        <button className="btn justify-start w-full">
          <GrInstagram size={20} />
          instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
