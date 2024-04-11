import React, { useEffect, useState } from 'react';
import service2 from '../appwrite/config';
import PostCard from '../components/postcard';
import Container from '../container/Container';

function AllPosts(props) {
     console.log('aaas̄')

        const [data, setPosts] = useState([])
    useEffect(() => {
        console.log('inside useeffect')
        
        service2.getalldocuments().then((data)=>{
                 console.log(data.documents)
            if(data)
            {
                setPosts(data.documents)
               
            }
        })

    }, [])
     
        return(
    <>
     <div className='w-full py-8'>
            <div className='flex flex-wrap'>
                {data.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4  bg-pink-400'>

                      <PostCard {...post}/>

                    </div>
                ))}
            </div>
    </div>
    
    </>
    
     

        
    )
}

export default AllPosts;