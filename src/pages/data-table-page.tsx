import {useNavigate} from "react-router-dom";
import * as React from 'react';
import {SearchType} from "../utils/constants";

export type tableProps = {
    type: SearchType,
}

const DataTablePage = (props: tableProps) => {
    const {type} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('clicked!!!')
    }

    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            <h1>Selected {type}</h1>

            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default DataTablePage;