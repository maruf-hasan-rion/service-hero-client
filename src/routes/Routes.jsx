import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Services from "../pages/Services";
// import Dashboard from "../pages/Dashboard";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import ServiceToDo from "../pages/ServiceToDo";
import BookedServices from "../pages/BookedServices";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../pages/UpdateService";
import ServiceDetails from "../pages/ServiceDetails";
import Purchase from "../pages/Purchase";

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
        element: <Services></Services>,
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard></Dashboard>,
      //   children: [
      { path: "/addService", element: <AddService></AddService> },
      {
        path: "/manageService",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>,
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoute>
            <BookedServices></BookedServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceToDo",
        element: (
          <PrivateRoute>
            <ServiceToDo></ServiceToDo>
          </PrivateRoute>
        ),
      },
      //   ],
      // },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
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
