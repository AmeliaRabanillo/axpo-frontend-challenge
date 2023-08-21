import axios from "axios";
import {MAP_SERVER_GEOMETRY_TYPE, DRONE_RESTRICTIONS_LAYER, MAP_SERVER_SR, MAP_SERVER_URL} from "../utils/constants";

const getDroneRestrictions = (queryParams: { latitude: string, longitude: string }) =>
    new Promise((res, rej) => {
        const {longitude, latitude} = queryParams;

        axios.get(MAP_SERVER_URL,
            {
                params: {
                    layers: DRONE_RESTRICTIONS_LAYER,
                    geometryType: MAP_SERVER_GEOMETRY_TYPE,
                    sr: MAP_SERVER_SR,
                    lang: 'en',
                    returnGeometry: 'false',
                    tolerance: '0',
                    geometry: `{'x': ${longitude}, 'y': ${latitude}}`,
                }
            })
            .then(response => res(response.data))
            .catch(err => rej(err));
    });


export default getDroneRestrictions;
