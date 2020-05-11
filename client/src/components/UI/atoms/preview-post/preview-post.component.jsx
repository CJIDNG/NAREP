import React from 'react';
import { Link } from 'react-router-dom';
import { handleReadTime, handleDateFormat, ellipsis } from '@Utils/helpers';
const PreviewPost = ({ title, plainText, readTime, createdAt, slug, bannerImage }) => (
  <Link to={ `blog/${slug}` } className='w-1/3 mb-10'>
    <div className="w-11/12 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-center text-gray-800 capitalize" >{ title }</div>
        <img src={ bannerImage } alt={ title } />
        <p className='text-center text-gray-600 my-3'> { handleDateFormat(createdAt) } • { handleReadTime(readTime) }</p>

        <p className="text-gray-700 text-base text-2xl text-center">
          { ellipsis(plainText) }
        </p>
      </div>
    </div>
  </Link>
);

export default PreviewPost;
