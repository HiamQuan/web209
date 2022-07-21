import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/website/Header";

const WebsiteLayout = () => {
    return (
        <div>
            <div className="">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default WebsiteLayout;
