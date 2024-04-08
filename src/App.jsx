import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch } from 'react-redux'
import authservice, { AuthService } from './appwrite/auth'
import { loginUser,logout } from './store /authslice'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import {store} from './store /store'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'




function App() {

const dispatch=useDispatch()

  const [loading,setloading]=useState(true)





  useEffect(()=>{



authservice.getCurrentUser().then((data)=>{

if(data)
{

  dispatch(loginUser({data}))

}
else
{

  dispatch(logout())
}

}).finally(()=>setloading(false))


  },[])
  

  
     
  
  //here one time loading has been done and then coming here so thats the condition we are applying whether loading done or not 
     

return !loading?(
<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
<div className='w-full block'>

  <Header/>

  
  <main>

    <Outlet/>
  </main>



  <Footer/>

</div>


</div>

):null

    
}

export default App
