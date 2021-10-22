import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { AiFillMinusCircle } from "react-icons/ai";
import "./question.css";

function Singlequote({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div
            style={{
                width: "100%",
                margin: "1rem auto",
            }}
            className="question">
            <header style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>{title}</h2>
                <button
                    className="btn__question"
                    onClick={() => {
                        setShowInfo(!showInfo);
                    }}>
                    {showInfo ? (
                        <AiFillMinusCircle style={{ fontSize: "1.5rem" }} />
                    ) : (
                        <HiOutlinePlusCircle style={{ fontSize: "1.5rem" }} />
                    )}
                </button>
            </header>
            {showInfo && <p style={{ margin: "0.5rem 0.2rem 0", padding: "0 2rem 0 0" }}>{info}</p>}
        </div>
    );
}

export default Singlequote;
