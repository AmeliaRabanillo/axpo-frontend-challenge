import React from 'react'
import 'jest-styled-components';
import StartPage from "./start-page";
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../styled/themes/base-theme";
import {RoutesEnum, SEARCH_TYPE_DISPLAY_MAP} from "../utils/constants";
import {fireEvent, render} from "@testing-library/react";
import {screen} from '@testing-library/dom'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

describe("Start Page tests", () => {
    afterEach(() => {
        mockedUsedNavigate.mockClear();
    })

    test("Start Page matches snapshot", () => {
        const {container} = (render(
            <ThemeProvider theme={baseTheme}>
                <StartPage/>
            </ThemeProvider>
        ));
        expect(container).toMatchSnapshot();
    });

    test("Start Page button redirects to density population table page", () => {
        const {container} = (render(
            <ThemeProvider theme={baseTheme}>
                <StartPage/>
            </ThemeProvider>
        ));

        const button = screen.getByText(SEARCH_TYPE_DISPLAY_MAP['population_density']);
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith(RoutesEnum.POPULATION_DENSITY_TABLE_PAGE);
    });

    test("Start Page button redirects to drone restrictions table page", () => {
        const {container} = (render(
            <ThemeProvider theme={baseTheme}>
                <StartPage/>
            </ThemeProvider>
        ));

        const button = screen.getByText(SEARCH_TYPE_DISPLAY_MAP['drone_restriction']);
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenCalledWith(RoutesEnum.DRONE_RESTRICTION_TABLE_PAGE);
    });

});