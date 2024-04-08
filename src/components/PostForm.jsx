import React, { useCallback, useState } from 'react';
import Input from './input';
import { useForm } from 'react-hook-form';
import RTE from './RTE';


function PostForm(props) {
    const [website,setwebsite]=useState('//')


    const slugTransform = useCallback((value) => {
        console.log('inside slugmethd')
        console.log(value)
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    const {register,handleSubmit,control} =useForm()
    return (
        <form className='flex flex-wrap'>
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
                    {...register("Slug", { required: true })}
                    

                />
                <RTE   label='content:' name='content' control={control}/>

                
                </div>
               
                




        </form>


);
}

export default PostForm;