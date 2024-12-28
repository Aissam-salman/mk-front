import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import RegisterPages from "./register.pages.tsx";
import Profile from "./profile.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/register",
        element: <RegisterPages/>
    },
    {
        path: "/profile",
        element: <Profile/>
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
