import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/website/footer/Footer";
import Header from "../../components/website/Header";

const WebsiteLayout = () => {
    return (
        <div>
            <div className="container">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default WebsiteLayout;
