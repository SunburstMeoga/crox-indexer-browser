import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import('@/components/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Details = lazy(() => import('@/pages/Details'))
const LastestBlock = lazy(() => import('@/pages/LastestBlock'))
const LastestTransactions = lazy(() => import('@/pages/LastestTransactions'))
const BRC20Details = lazy(() => import('@/pages/BRC20Details'))
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
                path: '/latest-block',
                element: <Suspense><LastestBlock></LastestBlock></Suspense>
            },
            {
                path: '/latest-transactions',
                element: <Suspense><LastestTransactions></LastestTransactions></Suspense>
            },
            {
                path: 'details/:id',
                element: <Suspense><Details></Details></Suspense>,
            },
            {
                path: '/brc20-details/:name',
                element: <Suspense><BRC20Details></BRC20Details></Suspense>
            }
        ]
    }
])

export default router