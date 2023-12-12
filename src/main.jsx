import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './assets/Pages/Root';
import Home from './assets/Pages/Home';
import All_Jobs from './assets/Pages/All_Jobs';
import Blogs from './assets/Pages/Blogs';
import Aplied_Jobs from './assets/Pages/Aplied_Jobs';
import Add_Job from './assets/Pages/Add_Job';
import My_Jobs from './assets/Pages/My_Jobs';
import Register from './assets/Pages/Register';
import AuthtProvider from './assets/Components/AuthProvider';
import Login from './assets/Pages/Login';
import ErrorPage from './assets/Pages/ErrorPage';
import PrivateRoute from './assets/Components/PrivateRoute';
import Job_Details from './assets/Pages/Job_Details';
import Apply_job from './assets/Pages/Apply_job';
import Applied_Jobs_details from './assets/Pages/Applied_Jobs_details';
import Update from './assets/Pages/Update';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        loader:()=>fetch('https://server-site-kohl-ten.vercel.app/jobs'),
        element: <Home></Home>
      },
      {
        path: '/all_jobs',
        loader:()=>fetch('https://server-site-kohl-ten.vercel.app/jobs'),
        element: <All_Jobs></All_Jobs>
      },
      {
        path: '/applied_jobs',
        // loader:()=>fetch('https://server-site-kohl-ten.vercel.app/appliedJob'),
        element: <PrivateRoute><Aplied_Jobs></Aplied_Jobs></PrivateRoute>
      },
      {
         path:'/applied_jobs_details/:id',
         loader:({params})=>fetch(`https://server-site-kohl-ten.vercel.app/appliedJob/${params.id}`),
         element:<PrivateRoute><Applied_Jobs_details></Applied_Jobs_details></PrivateRoute>
      },
      {
        path: '/add_job',
        element: <PrivateRoute><Add_Job></Add_Job></PrivateRoute>
      },
      {
        path: '/my_jobs',
        element: <PrivateRoute><My_Jobs></My_Jobs></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'/jobs-details/:category/:id',
        loader: ({ params }) => fetch(`https://server-site-kohl-ten.vercel.app/jobs/${params.category}/${params.id}`),
        element: <PrivateRoute><Job_Details></Job_Details></PrivateRoute>
      },
      {
        path:'/apply_job/:category/:id',
        loader: ({ params }) => fetch(`https://server-site-kohl-ten.vercel.app/jobs/${params.category}/${params.id}`),
        element:<PrivateRoute><Apply_job></Apply_job></PrivateRoute>
      },
      {
        path:'/update/:category/:id',
        loader:({params})=>fetch(`https://server-site-kohl-ten.vercel.app/jobs/${params.category}/${params.id}`),
        element:<PrivateRoute><Update></Update></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(



    <React.StrictMode>
      <AuthtProvider>
        <RouterProvider router={router} />
      </AuthtProvider>
    </React.StrictMode>



)
