import React from 'react';
import service2 from '../appwrite/config';
import { Link } from 'react-router-dom';


function postcard({

id,
title,
featureImage,



}) {
    return (
       <Link to={`/post/${id}`}>
        <div className='w-full bg-gray-100 rounded-xlp-4 '>
             <div className='w-full justify-center mb-4'>
                   <img src={service2.getFilePreview(featureImage)} alt={title}/>



             </div>



        </div>
       
       
       </Link>



    );
}

export default postcard;