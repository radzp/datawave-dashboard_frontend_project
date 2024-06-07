import React from "react";
import { LineGraph } from "../graphs/LineGraph";


function Dashboard() {
    return (
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <LineGraph/>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>

        </section>
    );
}

export default Dashboard;