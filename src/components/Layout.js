import React from "react";


import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate()

    const toHome = () => {
        navigate('/')
    }

    const toDetails = () => {
        navigate('/details/' + 3, { replace: true })

    }

    return <div>
        <div onClick={() => toHome()}>to home</div>
        <div onClick={() => toDetails()}>to details</div>
        <Outlet></Outlet>
    </div>
}

export default Layout