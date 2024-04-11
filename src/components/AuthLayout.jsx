import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Protected({children,authentication=trueuse}) {

const navigate=useNavigate()
 const [loader,setloader]=useState(true)
 const status=useSelector(state=>state.auth.status)



 useEffect(()=>{
///todo make this more easy

    if(authentication && status
        !==authentication)
    {
        navigate('/login')

    }
else if (!authentication&&status!==authentication)
{

    navigate("/")
}

setloader(false)

 },[status,navigate,authentication])

    return  loader?<h1>loading...</h1>:<>{children}</>
    
}

