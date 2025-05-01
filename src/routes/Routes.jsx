import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayOut,
        children:[
            {
                path:'/',
                // Component:
            }
        ]
    }
])