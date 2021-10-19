import React from "react";
import "./index.css";

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <div className="person" key={id}>
                        <div className="person__img">
                            <img src={image} alt="name" />
                        </div>
                        <h2 className="person__name">{name}</h2>
                        <h4 className="person__age">{age} years</h4>
                    </div>
                );
            })}
        </>
    );
};

export default List;
