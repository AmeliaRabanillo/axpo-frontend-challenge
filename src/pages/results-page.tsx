import {tableProps} from "./data-table-page";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {SearchTypeEnum} from "../utils/constants";
import {JsonView, allExpanded, defaultStyles} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import getDroneRestrictions from "../services/getDroneRestrictions";
import getPopulationDensity from "../services/getPopulationDensity";
import BackButton from "../components/back-button";
import {H2, H3} from "../styled/headings";
import HeaderContainer from "../components/header-container";

const ResultsPage = (props: tableProps) => {
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
            <HeaderContainer>
                <BackButton goToUrl={`/${type}`}/>
                <H2>Here are your results for {type}</H2>
            </HeaderContainer>
            <H3>Latitude:{state.latitude}</H3>
            <H3>Longitude:{state.longitude}</H3>
            {errorMsg
                ? <p>{errorMsg}</p>
                : <JsonView data={data} shouldInitiallyExpand={allExpanded} style={defaultStyles}/>}
        </div>
    );
}

export default ResultsPage;