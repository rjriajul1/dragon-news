import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import CategoryNews from "../pages/categoryNews/CategoryNews";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayOut,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'categoryNews/:id',
                hydrateFallbackElement:<p>Loading....</p>,
                loader: ()=> fetch('/news.json'),
                Component:CategoryNews
            }
        ]
    }
])