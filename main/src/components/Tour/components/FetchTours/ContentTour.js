import React, { useState } from "react";

const ContentTour = ({ id, name, image, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="tour__container">
            <div className="tour__img">
                <img src={image} alt={name} />
            </div>
            <div className="tour__i4">
                <h2>{name}</h2>
                <span>${price}</span>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        className="btn-readmore"
                        onClick={() => {
                            setReadMore(!readMore);
                        }}>
                        {readMore ? "Show less" : "Read more"}
                    </button>
                </p>
            </div>
            <button onClick={() => removeTour(id)} className="delete-btn">
                Not interested
            </button>
        </div>
    );
};

export default ContentTour;
