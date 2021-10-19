import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Birthday from "./components/Birthday";

function App() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>List Project Practice</h1>
            <Router>
                <ul
                    style={{
                        textAlign: "left",
                        listStyle: "none",
                        fontSize: "2rem",
                        margin: "3rem auto",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/birthday">
                            Birthday
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/tour">
                            Tour
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/birthday">
                        <Birthday />
                    </Route>
                    <Route path="/tour">
                        <h3>Tour</h3>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;