import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Destination from "../Pages/Destination";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : "/destination",
                element : <PrivateRoute><Destination></Destination></PrivateRoute>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])
export default router ;