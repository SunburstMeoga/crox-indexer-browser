import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBar from "./MenuBar";
import FooterBar from "./FooterBar";

const Layout = () => {
    const location = useLocation()
    // console.log(location)
    return <div>
        <MenuBar></MenuBar>
        <Outlet></Outlet>
        <div className="w-full py-6  bg-primary-green">
            <FooterBar></FooterBar>
        </div>
    </div>
}

export default Layout