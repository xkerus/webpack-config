import {createRoot} from "react-dom/client";
import App from "./components/App";
import {createHashRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "@/pages/about/About.lazy";
import {Shop} from "@/pages/shop";
import React, {Suspense} from "react";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}> <LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}> <Shop /></Suspense>
            },
        ]
    },
]);

container.render(
        <RouterProvider router={router} />
)