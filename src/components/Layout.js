import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";


const Layout = () => {
    return <div>
        <MenuBar></MenuBar>
        <Outlet></Outlet>
        <div>底部栏</div>
    </div>
}

export default Layout