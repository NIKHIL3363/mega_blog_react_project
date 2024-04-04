import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store /authslice';


function logoutBtn(props) {
    const dispatch=useDispatch()



    const logouthandler=()=>{

        authService.logout().then((data)=>{

            dispatch(logout())

        })
    }
    return (
<button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>

logout

</button>
    );
}

export default logoutBtn;