import React, { useState } from "react";
import Singlequote from "./components/Singlequote";
import data from "./data";
function Accordion(props) {
    const [questions, setQuestions] = useState(data);
    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Question And Answers About Login</h2>
            <div
                style={{
                    boxShadow: "0 0 5px black",
                    margin: "0 auto",
                    width: "30%",
                    padding: "1rem",
                    borderRadius: "10px",
                }}
                className="info">
                {questions.map((question) => {
                    return <Singlequote key={question.id} {...question} />;
                })}
            </div>
        </div>
    );
}

export default Accordion;
