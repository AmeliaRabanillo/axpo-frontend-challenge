import {useNavigate} from "react-router-dom";
import {create_data_array} from "../utils/get-rows";
import * as React from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {SearchType} from "../utils/constants";

export type tableProps = {
    type: SearchType,
}
//"ID;Name;Type;Latitude;Longitude"

const DataTablePage = (props: tableProps) => {
    const {type} = props;
    const navigate = useNavigate();
    const raw_rows = create_data_array();

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', flex: 1,},
        {field: 'name', headerName: 'Name', flex: 1,},
        {field: 'type', headerName: 'Type', flex: 1,},
        {field: 'latitude', headerName: 'Latitude', flex: 1,},
        {field: 'longitude', headerName: 'Longitude', flex: 1,},
    ];

    const rows = raw_rows.map(row => {
        return {
            id: row[0],
            name: row[1],
            type: row[2],
            latitude: row[3],
            longitude: row[4]
        };
    });

    const handleClick = () => {
        console.log('clicked!!!')
    }

    //ToDO remove cell outline when selecting row
    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            <h1>Selected {type}</h1>

            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                pageSizeOptions={[10, 15, 20]}
                hideFooterSelectedRowCount={true}
            />

            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default DataTablePage;