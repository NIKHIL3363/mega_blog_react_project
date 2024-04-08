
import React, { useEffect, useState } from 'react';
import service2 from '../appwrite/config';
import PostCard from '../components/postcard';
import { Container } from 'postcss';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home(props) {
    const [posts,setposts]=useState([])
    const userdata=useSelector(state=>state.auth.userdata)
    


    useEffect(()=>{


        service2.getalldocuments().then((data)=>{

        if(data)
        {
            setposts(data)
        }


        })




    },[])
      
    
if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1     className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
            </div>
        )
    }

    return(
        
          <div className='w-full py-8'>
                
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}

                    </div>

                
            </div>
        )

    



    
}

export default Home;