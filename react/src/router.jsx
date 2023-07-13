import {createBrowserRouter} from 'react-router-dom';
import Login from './Views/login';
import Error from './Views/error';
import Signup from './Views/signup';
import Users from './Views/users';
import Guest from './compenents/guest';
import Default from './compenents/default';
import { Children } from 'react';

const router = createBrowserRouter(  [
    {
        path: '/',
        element: <Guest/>,
        Children : [
            {
                path: '/login',
                element: <Login />
            }, 
            {
                path:'/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '/',
        element: <Default/>,
        Children : [
            {
                path:'/users',
                element: <Users />
            },
            {
                path:'/dashboard',
                element: <Dashboard />
            },
        ]
    },

{
    path:'*',
    element: <Error />
}
])

export default router