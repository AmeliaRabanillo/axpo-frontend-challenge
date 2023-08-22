import React from 'react'
import 'jest-styled-components';
import StartPage from "./start-page";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../styled/themes/base-theme";
import {RoutesEnum, SEARCH_TYPE_DISPLAY_MAP, SearchTypeEnum} from "../utils/constants";
import {fireEvent, render} from "@testing-library/react";
import {screen} from '@testing-library/dom'
import DataTablePage from "./data-table-page";
import {useNavigate} from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

describe("Start Page tests", () => {
    afterEach(() => {
        mockedUsedNavigate.mockClear();
    })

    test("Data table Page matches snapshot", () => {
        const {container} = (render(
            <ThemeProvider theme={baseTheme}>
                <DataTablePage type={SearchTypeEnum.DRONE_RES}/>
            </ThemeProvider>
        ));
        expect(container).toMatchSnapshot();
    });

    test("Data table Page redirects on button click", () => {
        const {container} = (render(
            <ThemeProvider theme={baseTheme}>
                <DataTablePage type={SearchTypeEnum.DRONE_RES}/>
            </ThemeProvider>
        ));
        const button = screen.getByText('Search');
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        //The first row is selected by default
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/drone_restriction/VL35', {
            "state": {
                "id": "VL35",
                "latitude": "46.105880590640965",
                "longitude": "7.809260581732722",
                "name": "Glovelier",
                "type": "run-of-river"
            }
        });
    });
});