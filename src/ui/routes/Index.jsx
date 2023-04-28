// import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home,BookingDetails,Booking } from "../pages";
export default function Index() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/booking",
            element: <Booking/>
        },
        {
            path: "/booking/details",
            element: <BookingDetails/>
        },
    ]);
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
