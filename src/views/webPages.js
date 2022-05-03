import React from "react";
import {
    BrowserRouter as Router,
    //Switch,
    Route,
   // Link,
    Routes
} from "react-router-dom"
import GameInfo from "./gameInfo";
import GameMain from "./gameMain";

const Webpages = () => {
    console.log("test 4");
    return(
        
        <Router>
            <Routes>
                <Route exact path="/" element={<GameMain/>} />
                <Route path="/info/" element={<GameInfo/>} />
            </Routes>
        </Router>
    );
}

export default Webpages;