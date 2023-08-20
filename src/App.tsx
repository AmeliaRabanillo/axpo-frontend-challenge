import React from 'react';
import {Route, Routes} from "react-router-dom";
import StartHeader from "./pages/start-page";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartHeader/>}/>
                <Route path="/population_density" element={<div></div>}/>
                <Route path="/drone_restriction" element={<div></div>}/>
            </Routes>
        </div>
    );
}

export default App;
