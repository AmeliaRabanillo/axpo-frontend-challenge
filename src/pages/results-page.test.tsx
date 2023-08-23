import React from 'react'
import 'jest-styled-components';
import {ThemeProvider} from "styled-components";
import {baseTheme} from "../styled/themes/base-theme";
import {DRONE_RESTRICTIONS_LAYER, SearchTypeEnum} from "../utils/constants";
import {act} from "@testing-library/react";
import ResultsPage from "./results-page";
import mockAxios from "jest-mock-axios";
import ReactDOM from 'react-dom/client';

const mockedUseNavigate = jest.fn();
const mockedUseLocation = jest.fn();
var mockUseLocationResult = {
    state: {
        id: '1',
        name: 'fake-name',
        latitude: '2',
        longitude: '3',
        type: 'fake-type'
    }
}
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate,
    useLocation: () => mockUseLocationResult,
}));

let windowSpy = jest.spyOn(window, 'alert').mockImplementation(() => {
});

describe("Result page tests", () => {

    // @ts-ignore
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        mockedUseNavigate.mockClear();
        mockedUseLocation.mockClear();
        // @ts-ignore
        document.body.removeChild(container);
        container = null;
    })

    test("Result Page for drone restrictions matches snapshot", async () => {
        const fakeResponse = {
            results:
                [{
                    "layerBodId": DRONE_RESTRICTIONS_LAYER,
                    "layerName": "Population (residents)",
                    "featureId": 4625514,
                    "id": 4625514,
                    "attributes": {
                        "number": 7,
                        "i_year": 2010,
                        "reli": 75602210,
                        "label": 75602210
                    }
                },
                ]
        }
        // @ts-ignore
        mockAxios.get.mockImplementationOnce(() => new Promise((res, rej) => res({data: fakeResponse})));

        await act(() => {
            // @ts-ignore
            ReactDOM.createRoot(container).render(<ThemeProvider theme={baseTheme}>
                    <ResultsPage type={SearchTypeEnum.DRONE_RES}/>
                </ThemeProvider>
            );
        });
        // @ts-ignore
        expect(container).toMatchSnapshot();
        expect(windowSpy).not.toHaveBeenCalled();
    });

    test("Result Page for drone restrictions service errors matches snapshot", async () => {
        // @ts-ignore
        mockAxios.get.mockImplementationOnce(() => new Promise((res, rej) => rej(new TypeError('This is a random error'))));
        jest.spyOn(window, 'alert').mockImplementation(() => {
        });

        await act(() => {
            // @ts-ignore
            ReactDOM.createRoot(container).render(<ThemeProvider theme={baseTheme}>
                    <ResultsPage type={SearchTypeEnum.DRONE_RES}/>
                </ThemeProvider>
            );
        });
        // @ts-ignore
        expect(container).toMatchSnapshot();
        expect(windowSpy).toHaveBeenCalledTimes(1);
    });

    test("Result Page for population density matches snapshot", async () => {
        const fakeResponse = {
            results:
                [{
                    "layerBodId": DRONE_RESTRICTIONS_LAYER,
                    "layerName": "Population (residents)",
                    "featureId": 4625514,
                    "id": 4625514,
                    "attributes": {
                        "number": 7,
                        "i_year": 2010,
                        "reli": 75602210,
                        "label": 75602210
                    }
                },
                ]
        }
        // @ts-ignore
        mockAxios.get.mockImplementationOnce(() => new Promise((res, rej) => res({data: fakeResponse})));

        await act(() => {
            // @ts-ignore
            ReactDOM.createRoot(container).render(<ThemeProvider theme={baseTheme}>
                <ResultsPage type={SearchTypeEnum.POP_DENSITY}/>
            </ThemeProvider>);
        });

        // @ts-ignore
        expect(container).toMatchSnapshot();
        expect(windowSpy).not.toHaveBeenCalled();
    });

    test("Result Page for population density service errors matches snapshot", async () => {
        // @ts-ignore
        mockAxios.get.mockImplementationOnce(() => new Promise((res, rej) => rej(new TypeError('This is a random error'))));
        jest.spyOn(window, 'alert').mockImplementation(() => {
        });

        await act(() => {
            // @ts-ignore
            ReactDOM.createRoot(container).render(<ThemeProvider theme={baseTheme}>
                <ResultsPage type={SearchTypeEnum.POP_DENSITY}/>
            </ThemeProvider>);
        });
        // @ts-ignore
        expect(container).toMatchSnapshot();
        expect(windowSpy).toHaveBeenCalledTimes(1);
    });

    test("Result Page with unknown search type matches snapshot", async () => {

        await act(() => {
            // @ts-ignore

            ReactDOM.createRoot(container).render(
                <ThemeProvider theme={baseTheme}>
                    {/*@ts-ignore*/}
                    <ResultsPage type='fake type'/>
                </ThemeProvider>);
        });
        // @ts-ignore
        expect(container).toMatchSnapshot();
        expect(windowSpy).toHaveBeenCalledTimes(1);
    });

});