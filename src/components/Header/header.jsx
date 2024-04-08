import React from 'react';
import Container from '../../container/Container';
import Logo from '../Logo';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LogoutBtn from '/Users/nikhilmutkule/Desktop/Blog_Using_React/src/components/Header/logoutBtn.jsx'

function Header() {
    const navigate=useNavigate();
    const authstatus=useSelector(states=>states.auth.status)

console.log(authstatus)
    
    const navbar=[{
     name:'home',
     slug:'/',
     active:true},
    {
        name :'login',
        slug:'/login',
        active:!authstatus

    },
    {

        name:'signup',
        slug:'/signup',
        active:!authstatus
    },
     {

        name:'addpost',
        slug:'/addpost',
        active:authstatus
     },

     {

        name:'allposts',
        slug:'/allposts',
        active:authstatus
     }

    ]
    return (
           <header className='py-3 shadow bg-gray-500'>
           <Container>
                <nav className='flex'>
                    <div className='mr-4'> 
                    <Link to='/'>
                        <Logo width='70px'/>
                    </Link>
 

                    </div>
                    <ul className='flex ml-auto'>
                               {
                                navbar.map((item)=>

                                   item.active ? (
                                    <li key={item.name}>


                                      <button  onClick={()=>navigate(item.slug)}  className='inline-block px-6 py-2 duration-200 hover:bg-blue-600 rounded-full'>{item.name}</button>
 

                                    </li>
                                    
                                    
                                    
                                    
                                    ): null
                                
                                

                                )
                                }
                                {authstatus && (<li>
                                    <LogoutBtn/>
                                </li>)}
                    </ul>



                </nav>
           </Container>
           

        </header>
)
}

export default Header;

