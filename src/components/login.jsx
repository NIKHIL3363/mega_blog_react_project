import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as storelogin, logout } from '../store /authslice';
import { useDispatch } from 'react-redux';
import Button from './button';
import Logo from './Logo';
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';
import Input from './input';



function login(props) {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {register,handlesubmit}=useForm()
    const [error,setError]=useState('')



    const login=async(data)=>{
        setError('')
        try{

            const session=await authService.login(data)
            if(session)
            {

               currentuser = await authService.getCurrentUser()

               if(currentuser) dispatch(storelogin(currentuser))

               navigate('/')
            }
        }
        catch(er)
        {
           setError(er.message)


        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                 <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>

                        <Logo width='100%'/>



                    </span>


                 </div>
                 <h2 className='text-center text-2xl font-bold leading-tight'>sign in to your account</h2>
                 <p className='mt-2 text-center text-base text-black/60'>dont have account 
                 <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>SIGN UP</Link>

                 </p>
                 {error && <p className='text-red-500 text-center mt-8'>{error}</p>}

                   <form onSubmit={handlesubmit(login)} className='mt-8'>

                       <div className='space-y-5'>
                        <Input label='Email:' placeholder="enter your email"
                        type='email'
                        {...register('email',{required:true})}
                        
                        />
                        <Input label='password:'
                        type='password'
                        placeholder='enter your password'
                        {...register('password',{required:true})}
                        />

                        <Button type='submit'classname='w-full'>Sign In</Button>

                       </div>

                   </form>

            </div>
            
        </div>
    );
}

export default login;