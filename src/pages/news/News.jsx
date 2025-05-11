import React  from 'react';
import { CgMenuMotion } from 'react-icons/cg';
import { FaRegBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router';
// import { AuthContext } from '../../context/AuthContext';

const NewsCard = ({ news }) => {

  // const {setLoading} = use(AuthContext)
  const navigate = useNavigate();
  const {
    id,
    title,
    author,
    details,
    image_url,
    total_view,
    rating,
  } = news;


  const formattedDate = new Date(author.published_date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleReadMore = () =>{
    navigate(`/newsDetails/${id}`)
    // setLoading(false)
  }

  return (
    <div className="w-full mx-auto mb-5 bg-white rounded-xl shadow-md overflow-hidden">
     <div className='flex justify-between items-center bg-base-200 mb-3'>
     <div className="p-4 flex items-center gap-3 ">
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
        <div>
          <h4 className="font-semibold">{author.name}</h4>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
        </div>
      </div>
      <div className='flex gap-2 text-accent'>
      <FaRegBookmark size={24}/>
      <CgMenuMotion  size={24}/>
      </div>
     </div>

      <h2 className="text-lg font-bold px-4 pb-2">{title}</h2>

      <img src={image_url} alt="news thumbnail" className="w-full h-60 object-cover" />

      <div className="px-4 py-2 text-gray-700 text-sm">
        {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        <span onClick={handleReadMore} className="text-blue-500 font-medium ml-2 cursor-pointer">Read More</span>
      </div>
      <div className="px-4 py-4 flex items-center justify-between mt-5 bg-base-200">
        <div className="flex items-center text-orange-400">
          {Array(5).fill().map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < rating.number ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.087 6.408h6.684c.969 0 1.371 1.24.588 1.81l-5.412 3.923 2.087 6.408c.3.921-.755 1.688-1.54 1.118L12 18.26l-5.412 3.924c-.784.57-1.838-.197-1.54-1.118l2.087-6.408-5.412-3.923c-.783-.57-.38-1.81.588-1.81h6.684l2.087-6.408z"
              />
            </svg>
          ))}
          <span className="ml-2 font-medium text-gray-700">{rating.number}</span>
        </div>
        <div className="text-gray-600 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2h-2.586a1 1 0 00-.707.293l-2.828 2.828a1 1 0 01-1.414 0l-2.828-2.828A1 1 0 008.586 19H6a2 2 0 01-2-2v-2.882a2 2 0 01.447-1.842L9 10V6a3 3 0 116 0v4z" />
          </svg>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
