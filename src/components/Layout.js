import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import FooterBar from "./FooterBar";


const Layout = () => {
    return <div>
        <MenuBar></MenuBar>
        <Outlet></Outlet>
        <div className="w-full py-6  bg-primary-green">
            <FooterBar></FooterBar>
        </div>
    </div>
}

export default Layout