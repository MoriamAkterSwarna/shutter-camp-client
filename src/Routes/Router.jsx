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
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass/SelectedClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Payments from "../Pages/Dashboard/Student/Payments/Payments";
import EnrolledClass from "../Pages/Dashboard/Student/EnrolledClass/EnrolledClass";
import PrivateRoutes from "./PrivateRoutes";
import InstructorRoutes from "./InstructorRoutes";
import PaymentInfo from "../Pages/Dashboard/PaymentInfo";





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
                },
                
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path: 'allusers',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'manageclasses',
                element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
            },
            {
                path: 'addclass',
                element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
            },
            {
                path: 'myclass',
                element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },
            {
                path: 'selectedclasses',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'payments/:id',
                element: <Payments></Payments>
            },
            {
                path:'enrolledclasses',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payments',
                element: <PaymentInfo></PaymentInfo>
            }
            
        ]
       
    }

    

])