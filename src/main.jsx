import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store /store.js'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Children } from 'react'
import Home from './pages/Home.jsx'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'
import AddPost from './pages/addpost.jsx'
import AllPosts from './pages/allposts.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'


 const router=createBrowserRouter([
             
  {



    path:"/",
    element:<App/>,


     children:[

    {path:'/',
  element:<Home/>},
  {
    path:'/login',
    element:<Login/>

  },
  {
    path:'/signup',
    element:<Signup/>
  },
 {
  path:'/addpost',
  element:<AddPost/>
},
{
  path:'/allposts',
element:<AllPosts/>


},
{
  path:"/post/:slug",
  element:<Post/>

},
{
  path:'/editpost/:id',
  element:<EditPost/>

}



  
    
  

     ]

  }









  
 ]

  






    

 )


     


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>
        <RouterProvider router={router}/>

    </Provider>
   


  </React.StrictMode>,
)
