import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import('@/components/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Details = lazy(() => import('@/pages/Details'))
const LastestBlock = lazy(() => import('@/pages/LastestBlock'))
const LastestTransactions = lazy(() => import('@/pages/LastestTransactions'))
const BRC20Details = lazy(() => import('@/pages/BRC20Details'))
const BlockDetails = lazy(() => import('@/pages/LastestBlock/blockDetails'))
const Search = lazy(() => import('@/pages/Search'))
const TransferDataDetails = lazy(() => import('@/pages/BRC20Details/transferDataDetails'))
const InscriptionDetails = lazy(() => import('@/pages/BRC20Details/inscriptionDetails'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Layout></Layout></Suspense>,
        children: [
            {
                index: true,
                element: <Suspense><Home></Home></Suspense>,
                meta: {
                    title: 'page title',
                    footerBg: 'blue'
                }
            },
            {
                path: '/latest-block',
                element: <Suspense><LastestBlock></LastestBlock></Suspense>,
                meta: {
                    title: 'page title',
                    footerBg: 'blue'
                }
            },
            {
                path: '/latest-transactions',
                element: <Suspense><LastestTransactions></LastestTransactions></Suspense>,
                meta: {
                    title: 'page title',
                    footerBg: 'blue'
                }
            },
            {
                path: 'details/:id',
                element: <Suspense><Details></Details></Suspense>,
                meta: {
                    title: 'page title',
                    footerBg: 'blue'
                }
            },
            {
                path: '/brc20-details/:name',
                element: <Suspense><BRC20Details></BRC20Details></Suspense>,
                meta: {
                    title: 'page title',
                    footerBg: 'blue'
                }
            },
            {
                path: '/block-details/:hash',
                element: <Suspense><BlockDetails></BlockDetails></Suspense>,
                meta: {
                    title: 'page title',
                    footerBg: 'blue'
                }
            },
            {
                path: '/transfer-details/:btctxId',
                element: <Suspense><TransferDataDetails></TransferDataDetails></Suspense>
            },
            {
                path: '/inscription-details/:id',
                element: <Suspense><InscriptionDetails></InscriptionDetails></Suspense>
            },
            {
                path: '/search',
                element: <Suspense><Search></Search></Suspense>,
            }
        ]
    }
])

export default router