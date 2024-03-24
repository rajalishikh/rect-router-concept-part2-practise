import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutAbout from './assets/Component/About/AboutAbout';
import Contract from './assets/Component/Contract/Contract';
import ErroreElement from './assets/Component/Errorelement/ErroreElement';
import Food from './assets/Component/Food/Food';
import Header from './assets/Component/Header/Header';
import Home from './assets/Component/Home/Home';
import Post from './assets/Component/Post/Post';
import PostUnique from './assets/Component/PostUnique/PostUnique';
import User from './assets/Component/User/User';
import UserDetails from './assets/Component/UserDetails/UserDetails';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErroreElement></ErroreElement> ,
    children: [
      {
        path: "/header",
        element:<Header></Header>,
      },
      {
        path: '/contract',
        element:<Contract></Contract>,
      },
      {
        path:'/About',
        element:<AboutAbout></AboutAbout>
      },
      {
        path: '/User',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path: '/user/:UserId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element:<UserDetails></UserDetails>
        
      },
      {
        path: '/post',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Post></Post>
        
      },
      {
        path: '/PostUnique/:PostID',
        
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostID}`),
        element:<PostUnique></PostUnique>
        
      },
      {
        path: '/Food',
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a') ,
        element:<Food></Food>
      }


    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
