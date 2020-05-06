import React from 'react';


const PostsItem = ({ title, plainText }) => (
  <div className='w-1/2 mb-10'>
    <div className="w-11/12 rounded overflow-hidden shadow-lg">
      <img className="w-full h-64" src={ `${process.env.PUBLIC_URL}/img/home-banner.jpg` } alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{ title }</div>
        <p className="text-gray-700 text-base">
          { plainText }
        </p>
      </div>
    </div>
  </div>
);

export default PostsItem;
