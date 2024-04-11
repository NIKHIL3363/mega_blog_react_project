import React from 'react';
import service2 from '../appwrite/config';
import { Link } from 'react-router-dom';


function PostCard(
data
) 
{
console.log(data)
console.log('this is file idx')
console.log(data.$id)

    return (
       <Link to={`/post/${data.$id}`}>
             <div className='w-full bg-gray-100 rounded-xlp-4 '>

             <div className='w-full justify-center mb-4'>
            <img src={service2.getFilePreview(data.featuredImage)} alt={data.title}
            ></img>            </div>
        </div>

       
       
      </Link>



    );
}

export default PostCard;