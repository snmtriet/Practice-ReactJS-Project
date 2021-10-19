import { useState } from "react";
import "./index.css";
import List from "./List";
import data from "./data";

function Birthday() {
    const [people, setPeople] = useState(data);
    return (
        <>
            <div className="container__birthday">
                <h3>{people.length} Birthdays today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>Clear all</button>
            </div>
        </>
    );
}

export default Birthday;
