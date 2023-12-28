import { createBrowserRouter } from "react-router-dom";
import Authlayout from "./pages/layout/Authlayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export const router = createBrowserRouter([
    {
        element:<Authlayout/>,
        children:[
            {path:"login",element:<Login/>},
            {path:"signup",element:<Signup/>}
        ]
    }
])