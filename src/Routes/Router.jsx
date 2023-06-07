import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";

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
                }
            
        ]
    }
    

])