import React from 'react';
import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/start-page";
import DataTablePage from "./pages/data-table-page";
import {RoutesEnum, SearchTypeEnum} from "./utils/constants";
import ResultsPage from "./pages/results-page";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "./styled/themes/base-theme";
import GlobalStyle from "./styled/global-styles";
import NotFound from "./pages/404";

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalStyle/>
            <Routes>
                <Route path='*' element={<NotFound />}/>
                <Route path={RoutesEnum.START_PAGE} element={<StartPage/>}/>

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
