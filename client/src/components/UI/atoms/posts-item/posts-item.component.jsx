import React from 'react';
import { Link } from 'react-router-dom';
import { handleReadTime } from '@Utils/helpers/handleReadTime';
import { handleDateFormat } from '@Utils/helpers/handleDateFormat';
const PostsItem = ({ title, plainText, readTime, createdAt, slug }) => (
  <Link to={ `blog/${slug}` } className='w-1/2 mb-10'>
    <div className="w-11/12 rounded overflow-hidden shadow-lg">
      <img className="w-full h-64" src={ `${process.env.PUBLIC_URL}/img/home-banner.jpg` } alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-center text-gray-800 capitalize" >{ title }</div>
        <p className='text-center text-gray-600 my-3'> { handleDateFormat(createdAt) } • { handleReadTime(readTime) }</p>

        <p className="text-gray-700 text-base text-2xl text-center">
          { plainText }
        </p>
      </div>
    </div>
  </Link>
);

export default PostsItem;
