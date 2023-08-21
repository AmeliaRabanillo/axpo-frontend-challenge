import {rowType, tableProps} from "./data-table-page";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {SEARCH_TYPE_DISPLAY_MAP, SearchTypeEnum} from "../utils/constants";
import {JsonView, allExpanded, defaultStyles} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import getDroneRestrictions from "../services/getDroneRestrictions";
import getPopulationDensity from "../services/getPopulationDensity";
import BackButton from "../components/back-button";
import {H2, H3} from "../styled/headings";
import HeaderContainer from "../components/header-container";
import P from "../styled/p";

const ResultsPage = (props: tableProps) => {
    const {type} = props;
    const location = useLocation();
    const state = location.state as rowType
    console.log(state)

    const [data, setData] = useState<any>({});//ToDo maybe useMemo here
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        //ToDo handle errors
        if (type === SearchTypeEnum.DRONE_RES)
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
        else if (type === SearchTypeEnum.POP_DENSITY)
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
                <H2>Here are your results for {SEARCH_TYPE_DISPLAY_MAP[type]}</H2>
            </HeaderContainer>
            <P><b>Id:</b> {state.id}</P>
            <P><b>Name:</b> {state.name}</P>
            <P><b>Type:</b> {state.type}</P>
            <P><b>Latitude:</b> {state.latitude}</P>
            <P><b>Longitude:</b> {state.longitude}</P>
            {errorMsg
                ? <p>{errorMsg}</p>
                : <JsonView data={data} shouldInitiallyExpand={allExpanded} style={defaultStyles}/>}
        </div>
    );
}

export default ResultsPage;