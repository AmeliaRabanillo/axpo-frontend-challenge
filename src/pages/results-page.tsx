import {tableProps} from "./data-table-page";
import {useLocation, useNavigate} from "react-router-dom";
import React from "react";

const ResultsPage = (props: tableProps) => {
    const navigate = useNavigate();
    const {type} = props;
    const {state} = useLocation();
    console.log(state)

    return (
        <div>
            <button onClick={() => navigate(`/${type}`)}>Back</button>
            <h1>Here are your results</h1>
        </div>
    );
}

export default ResultsPage;