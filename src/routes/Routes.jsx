import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import ServiceToDo from "../pages/ServiceToDo";
import BookedServices from "../pages/BookedServices";
import PrivateRoute from "./PrivateRoute";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <PrivateRoute>

            <Services></Services>,
        </PrivateRoute> 
      },
      {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        children: [
            { path: "/dashboard/addService", 
              element: <AddService></AddService>,
            },
            { path: "/dashboard/manageService", 
              element: <ManageService></ManageService>,
            },
            { path: "/dashboard/bookedServices", 
              element: <BookedServices></BookedServices>
            },
            { path: "/dashboard/serviceToDo", 
              element: <ServiceToDo></ServiceToDo>
            }
        ],
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
