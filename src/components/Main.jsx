import React from 'react';
import './main.css';
import PageTitle from "./PageTitle";
import DashBoard from "./Dashboard";

function Main() {
    return (
        <main id="main" className="main">
            <PageTitle page="Dashboard" />
            <DashBoard/>
        </main>

    );
}

export default Main;