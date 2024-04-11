import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import service2 from '../appwrite/config';
import { useSelector } from 'react-redux';
import Container from '../container/Container';
import Button from '../components/button';
 

function Post(props) {
         const documentId=useParams()
         const navigate=useNavigate()
         console.log(documentId)
         const [post,setpost]=useState({})
        const status=useSelector(state=>state.auth.status)
        console.log(status)
        const userdata=useSelector(state=>state.auth.userdata)

         useEffect(()=>{
                        
            console.log('inside useeffect')
                 service2.getDocument(documentId.slug).then((data)=>{
                     console.log(data)
                    setpost(data)

                 })     


        },[])

          console.log('this is post')
          console.log(post)
         
          const deletePost=(id)=>{

              console.log(id)

              service2.deletePost(id).then((status)=>{

               if(status)
               {
                   service2.deleteFile(post.featuredImage)
                   navigate('/')


                   

               }

              })


          }
 return (
       <div className='py-8'>
        < div className='w-full max-w-7xl mx-auto px-4'>
        <div className="flex justify-center mb-4 relative border rounded-xl p-2">
                    <img 
                        src={service2.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"

                    />
                    { status &&
                     <div className="absolute right-6 top-6">
                              <Link to={`/editpost/${post.$id}`}>
                                <Button className="bg-green-500 mr-3 rounded w-30">
                                 Edit
                                </Button>
                               </Link>
                                <Button className="bg-red-500 w-30" onClick={()=>deletePost(post.$id)}>
                                Delete
                                </Button>
                      
                        </div>
                       }
                      </div>
        </div>
        
        
       </div>

    );
}

export default Post;