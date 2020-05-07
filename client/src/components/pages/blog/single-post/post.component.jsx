import React from 'react';
import SocialShare from '@Atoms/social-share/social-share.component';
import { handleReadTime } from '@Utils/helpers/handleReadTime';
import { handleDateFormat } from '@Utils/helpers/handleDateFormat';

const PostPage = ({ id, bannerImage, title, description, readTime, body, createdAt }) => (
  <>
    <div className='w-3/4 mx-auto my-10'>

      <p
        className='text-center font-semibold text-5xl mb-6 capitalize'
      >{ title }
      </p>
      <p className='text-center text-2xl mb-6 capitalize'>{ description }</p>
      <img src='https://cdn.sanity.io/images/p4gom3ch/production/1254321647c3d58b7ab06deca442e0fbd6a15d65-7952x5304.jpg?&w=990&fit=max&auto=format&dpr=2' alt="" />
      <p className='text-center text-2xl text-gray-600 my-3'> { handleDateFormat(createdAt) } • { handleReadTime(readTime) }</p>
      <p className='text-3xl mt-6 capitalize'>{ body }</p>
      <SocialShare title={ title } className='text-2xl' />
    </div>

  </>
);

export default PostPage;