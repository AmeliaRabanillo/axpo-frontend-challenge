import {tableProps} from "./data-table-page";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {SearchTypeEnum} from "../utils/constants";
import getDroneRestrictions from "../services/getDroneRestrictions";
import getPopulationDensity from "../services/getPopulationDensity";

const ResultsPage = (props: tableProps) => {
    const navigate = useNavigate();
    const {type} = props;
    const {state} = useLocation();
    console.log(state)

    useEffect(() => {
        //ToDo handle errors
        if (type === SearchTypeEnum.DRONE_RESTRICTION)
            getDroneRestrictions({
                latitude: state.latitude,
                longitude: state.longitude
            }).then(data => console.log(data));
        else if (type === SearchTypeEnum.POPULATION_DENSITY)
            getPopulationDensity({
                latitude: state.latitude,
                longitude: state.longitude
            }).then(data => console.log(data));
    }, []);

    return (
        <div>
            <button onClick={() => navigate(`/${type}`)}>Back</button>
            <h1>Here are your results</h1>
        </div>
    );
}

export default ResultsPage;