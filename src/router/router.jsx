import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts.jsx/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import Projects from "../pages/Projects.jsx";
import Contactme from "../pages/Contactme.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path:"", element: <Home /> },
            { path:"about", element: <AboutMe /> },
            { path:"projects", element: <Projects /> },
            { path:"contact", element: <Contactme /> },
            { path:"*", element: <NotFound /> },
        ],
    },
]);

export default router;