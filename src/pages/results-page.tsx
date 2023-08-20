import {tableProps} from "./data-table-page";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {SearchTypeEnum} from "../utils/constants";
import {JsonView, allExpanded, defaultStyles} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import getDroneRestrictions from "../services/getDroneRestrictions";
import getPopulationDensity from "../services/getPopulationDensity";
import BackButton from "../components/back-button";

const ResultsPage = (props: tableProps) => {
    const navigate = useNavigate();
    const {type} = props;
    const {state} = useLocation();
    console.log(state)

    const [data, setData] = useState<any>({});//ToDo maybe useMemo here
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        //ToDo handle errors
        if (type === SearchTypeEnum.DRONE_RESTRICTION)
            getDroneRestrictions({
                latitude: state.latitude,
                longitude: state.longitude
            })
                .then(data => {
                    setData(data);
                    setErrorMsg('');
                })
                .catch(err => {
                    alert(err.message);
                    setErrorMsg(err.message);
                });
        else if (type === SearchTypeEnum.POPULATION_DENSITY)
            getPopulationDensity({
                latitude: state.latitude,
                longitude: state.longitude
            })
                .then(data => {
                    setData(data);
                    setErrorMsg('');
                })
                .catch(err => {
                    alert(err.message);
                    setErrorMsg(err.message);
                });
    }, []);

    return (
        <div>
            <BackButton goToUrl={`/${type}`}/>
            <h1>Here are your results</h1>
            <h3>{type}</h3>
            <h4>Latitude:{state.latitude}</h4>
            <h4>Longitude:{state.longitude}</h4>
            {errorMsg
                ? <p>{errorMsg}</p>
                : <JsonView data={data} shouldInitiallyExpand={allExpanded} style={defaultStyles}/>}
        </div>
    );
}

export default ResultsPage;