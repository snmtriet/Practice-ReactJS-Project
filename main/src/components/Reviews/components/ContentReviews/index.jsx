import React, { useState } from "react";
import people from "./../../data";
import "./reviews.css";
import { FcPrevious, FcNext } from "react-icons/fc";
function ContentReviews() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const handlePrevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const handleNextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const handleRandomPeople = () => {
        let randomPeople = Math.floor(Math.random() * people.length);
        if (randomPeople === index) {
            randomPeople = index + 1;
        }
        setIndex(checkNumber(randomPeople));
    };

    return (
        <div className="review__container">
            <div className="reivew__img">
                <img src={image} alt={name} />
            </div>
            <div className="reivew__info">
                <span className="review__info-name">{name}</span>
                <p className="review__info-title">{job}</p>
                <p className="review__info-text">{text}</p>
            </div>
            <div className="review__btn">
                <button className="btn-review prev">
                    <FcPrevious className="btn_reviews" onClick={handlePrevPerson} />
                </button>
                <button className="btn-review next">
                    <FcNext className="btn_reviews" onClick={handleNextPerson} />
                </button>
            </div>
            <button onClick={handleRandomPeople} className="supriseme">
                Suprise me
            </button>
        </div>
    );
}

export default ContentReviews;
