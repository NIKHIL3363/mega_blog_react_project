import React from 'react';
import service2 from '../appwrite/config';
import { Link } from 'react-router-dom';


function PostCard(
data
) 
{
  
    return (
      <Link to={`/post/${data.$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
          <div className='w-full justify-center mb-4'>
              <img src={service2.getFilePreview(data.featuredImage)} alt={data.title}
              className='rounded-xl' />

              

          </div>
          <h2
          className='text-xl font-bold'
          >{data.title}</h2>
      </div>
  </Link>


    );
}

export default PostCard;