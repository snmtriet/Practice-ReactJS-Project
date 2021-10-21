import React, { useState } from "react";
import ContentReviews from "./components/ContentReviews";

function Reviews() {
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <h3 style={{ fontSize: "2rem" }}>Our Reviews</h3>
                <ContentReviews />
            </div>
        </div>
    );
}

export default Reviews;
