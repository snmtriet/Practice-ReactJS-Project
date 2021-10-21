import React, { useState } from "react";
import ContentTour from "./ContentTour";
import "./tours.css";

function FetchTours({ tours, removeTour }) {
    return (
        <div>
            <h3 style={{ fontSize: "3rem", textAlign: "center" }}>Our Tours</h3>
            <hr />
            <div className="render__tours">
                {tours.map((tour) => {
                    return <ContentTour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </div>
    );
}

export default FetchTours;
