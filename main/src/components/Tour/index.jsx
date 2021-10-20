import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import FetchTours from "./components/FetchTours/index";

const url = "https://course-api.com/react-tours-project";
function Tour() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTour = tours.filter((tour) => tour.id !== id);
        setTours(newTour);
    };

    const fetchTours = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const tours = await res.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTours();
    }, []);
    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }
    if (tours.length === 0) {
        return (
            <main>
                <h3 style={{ textAlign: "center", fontSize: "3rem" }}>0 tours left</h3>\
                <button style={{ textAlign: "center", fontSize: "3rem" }} onClick={fetchTours}>
                    Refresh
                </button>
            </main>
        );
    }
    return (
        <main>
            <FetchTours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default Tour;
