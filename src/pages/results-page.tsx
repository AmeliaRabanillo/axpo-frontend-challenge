import {rowType} from "../common/types/row";
import {tableProps} from "../common/types/table-props";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {SEARCH_TYPE_DISPLAY_MAP, SearchTypeEnum} from "../utils/constants";
import {JsonView, allExpanded, defaultStyles} from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import getDroneRestrictions from "../services/getDroneRestrictions";
import getPopulationDensity from "../services/getPopulationDensity";
import BackButton from "../components/back-button";
import {H2} from "../styled/headings";
import HeaderContainer from "../components/header-container";
import P from "../styled/p";

const ResultsPage = (props: tableProps) => {
    const {type} = props;
    const location = useLocation();
    let state = location.state as rowType;
    const navigate = useNavigate();

    const [data, setData] = useState<any>({});
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (!state) {
            navigate('/404');
            return;
        }

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
        else {
            alert('Unknown type to search');
            setErrorMsg('Unknown type to search');
        }
    }, [state, navigate, type]);

    return (
        <div className='main-container'>
            <HeaderContainer>
                <BackButton goToUrl={`/${type}`}/>
                <H2>Here are your results for {SEARCH_TYPE_DISPLAY_MAP[type]}</H2>
            </HeaderContainer>
            {state && (<>
                    <P><b>Id:</b> {state.id}</P>
                    <P><b>Name:</b> {state.name}</P>
                    <P><b>Type:</b> {state.type}</P>
                    <P><b>Latitude:</b> {state.latitude}</P>
                    <P><b>Longitude:</b> {state.longitude}</P>
                </>
            )}
            {errorMsg
                ? <p>{errorMsg}</p>
                : <JsonView data={data} shouldInitiallyExpand={allExpanded} style={defaultStyles}/>}
        </div>
    );
}

export default ResultsPage;