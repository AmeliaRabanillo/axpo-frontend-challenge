import React from 'react';
import {Route, Routes} from "react-router-dom";
import StartHeader from "./pages/start-page";
import DataTablePage from "./pages/data-table-page";
import {RoutesEnum, SearchTypeEnum} from "./utils/constants";
import ResultsPage from "./pages/results-page";
// @ts-ignore
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./styled/themes/base-theme";
import GlobalStyle from "./styled/global-styles";

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalStyle/>
            <Routes>
                <Route path={RoutesEnum.START_PAGE} element={<StartHeader/>}/>

                <Route path={RoutesEnum.POPULATION_DENSITY_TABLE_PAGE}
                       element={<DataTablePage type={SearchTypeEnum.POP_DENSITY}/>}/>
                <Route path={`/${RoutesEnum.POPULATION_DENSITY_TABLE_PAGE}/:id`}
                       element={<ResultsPage type={SearchTypeEnum.POP_DENSITY}/>}/>

                <Route path={RoutesEnum.DRONE_RESTRICTION_TABLE_PAGE}
                       element={<DataTablePage type={SearchTypeEnum.DRONE_RES}/>}/>
                <Route path={`/${RoutesEnum.DRONE_RESTRICTION_TABLE_PAGE}/:id`}
                       element={<ResultsPage type={SearchTypeEnum.DRONE_RES}/>}/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
