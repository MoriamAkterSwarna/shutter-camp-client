import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddClass from "../Pages/Dashboard/AddClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: 'instructors',
                    element: <Instructor></Instructor>
                },
                {
                    path: 'class',
                    element: <Classes></Classes>
                }
            
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            }
        ]
       
    }

    

])