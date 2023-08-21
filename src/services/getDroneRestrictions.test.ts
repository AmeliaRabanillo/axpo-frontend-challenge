import React from 'react'
import getDroneRestrictions from "./getDroneRestrictions";
import mockAxios from 'jest-mock-axios';
import getPopulationDensity from "./getPopulationDensity";
import {DRONE_RESTRICTIONS_LAYER, MAP_SERVER_URL, POPULATION_DENSITY_LAYER} from "../utils/constants";

describe("getDroneRestrictions service tests", () => {
    // @ts-ignore
    const testResolveService = (serviceFunc, layer: string) => {
        const fakeResponse = {
            results:
                [{
                    "layerBodId": layer,
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

        serviceFunc({
            latitude: '1',
            longitude: '2'
            // @ts-ignore
        }).then((data) => {
            expect(data).toEqual(fakeResponse);

        })

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(MAP_SERVER_URL, {
            "params": {
                "geometry": "{'x': 2, 'y': 1}",
                "geometryType": "esriGeometryPoint",
                "lang": "en",
                "layers": layer,
                "returnGeometry": "false",
                "sr": "4326",
                "tolerance": "0"
            }
        });
    }

    // @ts-ignore
    const testRejectService = (serviceFunc, layer: string) => {
        const fakeResponse = {
            results:
                [{
                    "layerBodId": layer,
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
        const fakeError = new TypeError('this is a fake error');
        // @ts-ignore
        mockAxios.get.mockImplementationOnce(() => new Promise((res, rej) => rej(fakeError)));

        serviceFunc({
            latitude: '1',
            longitude: '2'
            // @ts-ignore
        }).catch((e) => {
            expect(e).toEqual(fakeError);
        })

        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(MAP_SERVER_URL, {
            "params": {
                "geometry": "{'x': 2, 'y': 1}",
                "geometryType": "esriGeometryPoint",
                "lang": "en",
                "layers": layer,
                "returnGeometry": "false",
                "sr": "4326",
                "tolerance": "0"
            }
        });
    }

    test("getDroneRestrictions service responds with no errors", () => {
        testResolveService(getDroneRestrictions, DRONE_RESTRICTIONS_LAYER);
    });

    test("getPopulationDensity service responds with no errors", () => {
        testResolveService(getPopulationDensity, POPULATION_DENSITY_LAYER);
    });

    test("getDroneRestrictions service responds with errors", () => {
        testRejectService(getDroneRestrictions, DRONE_RESTRICTIONS_LAYER)
    });

    test("getDroneRestrictions service responds with errors", () => {
        testRejectService(getPopulationDensity, POPULATION_DENSITY_LAYER)
    });
});