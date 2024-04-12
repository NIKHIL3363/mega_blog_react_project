import React, { useCallback, useEffect, useState } from 'react';
import Input from './input';
import { useForm } from 'react-hook-form';
import RTE from './RTE';
import Select from './select';
import Button from './button';
import service2 from '../appwrite/config';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PostForm({post}) {
    const {register,handleSubmit,control,getValues,setValue,watch} =useForm()
const navigate =useNavigate()
   const user= useSelector(state=>state.auth.userdata.data)
   console.log('this is user ')
console.log(user)
useEffect(()=>{


    const subcription= watch((currentFormdata,{name}) =>{


        console.log('this is current form data')
        console.log(currentFormdata)
        console.log(name)


        if(name==='title')
        {


           setValue('slug', slugTransform(currentFormdata.title))
        }

    })
    subcription.unsubscribe


},[])


const addpost=async(formdata)=>{

    console.log('this is formdata came here')
console.log(formdata)
console.log('this is post data')
console.log(post)
if (post) {
    const file = formdata.image[0] ? await service2.uploadFile(formdata.image[0]) : null;

    if (file) {
        service2.deleteFile(post.featuredImage);
    }

    const dbPost = await service2.updatepost(post.$id, {
        ...formdata,
        featuredImage: file ? file.$id : undefined,
    });

    if (dbPost) {
        
        navigate('/');
    }
} 

   else{
    const file=await service2.uploadFile(formdata.image[0])
        
    if(file)
    { 


    console.log(file)
        const fileid=file.$id
    
         const userid=user.$id
        formdata.featuredImage=fileid

        console.log('update')
        console.log(formdata)
 
   const res=await service2.createPost({...formdata,userid})
      
 if(res)
 {
    alert('post created')
    navigate('/')
 }

    }     
            

}


    

}
    const slugTransform = useCallback((value) => {
        console.log('inside slug method')
        console.log(value)
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    

    return (
        <form className='flex flex-wrap' onSubmit={handleSubmit(addpost)}>
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    onChange={()=>slugTransform(e.currentTarget.value)}
                    {...register("title", { required: true })}
                />

             

             <Input
                    label="URL/Slug :"
                    placeholder="URL will be generated here"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    

                />
                <RTE   label='content:' name='content' control={control}/>



             
                
                </div>
                <div className="w-1/3 px-2">
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service2.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Input 
                
                label='Upload Image Here'
                placeholder='IMG'
                type='file'
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register('image',{required:true})}
                />
                

               <Select className='mt-3'  label='status' options={['Active','Inactive']}  {...register('status',{required:true})}/>

               <Button type="submit"  className="w-full bg-green-500 mt-2 rounded">
                    {post ? "Update" : "Submit"}
                </Button>

               </div>

               



                




        </form>


);
}

export default PostForm;