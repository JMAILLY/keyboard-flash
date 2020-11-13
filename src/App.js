import React, {useEffect}  from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Speech from 'react-speech';

function App() {
    useEffect(() => {
        // ce que je veux après le render
    });
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path="/test1">
                            <Test/>
                        </Route>
                        <Route path="/test2">
                            <Test2/>
                        </Route>
                        <Route path="/">
                            <nav>
                                <h1 className={"neon title"}>Keyboard <span className={"neon-text-fire"}>FLAS<span
                                    className={"r"}>H</span></span></h1>
                                <ul>
                                    <li>
                                        <Link to="/test1" className={"text neon-text"}>test de lettres</Link>
                                    </li>
                                    <li>
                                        <Link to="/test2" className={"text neon-text"}>test de phrases</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Route>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}
export default App;
