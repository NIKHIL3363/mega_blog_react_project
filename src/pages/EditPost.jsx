import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import service2 from '../appwrite/config';
import Container from '../container/Container';
import PostForm from '../components/PostForm';


function EditPost(props) {
    const [post,setpost]=useState(null)
    const navigate=useNavigate()

const {id}=useParams()
console.log(id)




useEffect(()=>{
   service2.getDocument(id).then((data)=>{
if(data)
{
   setpost(data)

}

else{
navigate('/')
 

}

})
    

    },[])

           

    return post ? (
        <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
        </div>


        
        ):null

}

export default EditPost;