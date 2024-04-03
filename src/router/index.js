import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import('@/components/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Details = lazy(() => import('@/pages/Details'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Layout></Layout></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense><Home></Home></Suspense>,
            },
            {
                path: 'details/:id',
                element: <Suspense><Details></Details></Suspense>,
            }
        ]
    }
])

export default router