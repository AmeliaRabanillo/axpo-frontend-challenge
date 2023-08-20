import React from 'react';
import {Route, Routes} from "react-router-dom";
import StartHeader from "./pages/start-page";
import DataTablePage from "./pages/data-table-page";
import {RoutesEnum, SearchType} from "./utils/constants";
import ResultsPage from "./pages/results-page";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={RoutesEnum.START_PAGE} element={<StartHeader/>}/>

                <Route path={RoutesEnum.POPULATION_DENSITY_TABLE_PAGE}
                       element={<DataTablePage type={SearchType.POPULATION_DENSITY}/>}/>
                <Route path={`/${RoutesEnum.POPULATION_DENSITY_TABLE_PAGE}/:id`}
                       element={<ResultsPage type={SearchType.POPULATION_DENSITY}/>}/>

                <Route path={RoutesEnum.DRONE_RESTRICTION_TABLE_PAGE}
                       element={<DataTablePage type={SearchType.DRONE_RESTRICTION}/>}/>
                <Route path={`/${RoutesEnum.DRONE_RESTRICTION_TABLE_PAGE}/:id`}
                       element={<ResultsPage type={SearchType.DRONE_RESTRICTION}/>}/>
            </Routes>
        </div>
    );
}

export default App;
