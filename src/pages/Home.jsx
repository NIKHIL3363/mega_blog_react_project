
import React, { useEffect, useState } from 'react';
import service2 from '../appwrite/config';
import PostCard from '../components/postcard';
import { Container } from 'postcss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home(props) {
    const [posts,setposts]=useState([])
    const userdata=useSelector(state=>state.auth.userdata)
     const loginstatus=useSelector(state=>state.auth.status)


useEffect(()=>{


        service2.getalldocuments().then((data)=>{

        if(data && loginstatus)
        {
            setposts(data.documents)
        }


        })




    },[])
    
      
    
if (posts.length === 0
    &&loginstatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1     className="text-2xl font-semibold text-blue-600 hover:text-blue-800">

                 <Link to='/addpost'>                               You Havent Posted  Anything yet,click Here 
                 to post
</Link>

                            </h1>
                        </div>
                    </div>
            </div>
        )
    }



    else if(!loginstatus)
    {
        return(

            <div className='text-red-800 mt-11 mb-10 font-extrabold text-2xl'>
                Please Login To See Posts
            </div>
        )


    }


     else {return(
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

    
}

export default Home;