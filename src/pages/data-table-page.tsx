import {useNavigate} from "react-router-dom";
import * as React from 'react';
import {DataGrid, GridColDef, GridRowSelectionModel} from '@mui/x-data-grid';
import {SearchTypeEnum} from "../utils/constants";
import {Radio} from "@mui/material";
import {TABLE_DATA} from "../utils/table_data_constant";
import Search from "@mui/icons-material/Search";
import {PrimaryButton} from "../components/primary-button";
import {H2} from "../styled/headings";
import {ButtonContainer} from "../components/button-container";
import BackButton from "../components/back-button";
import HeaderContainer from "../components/header-container";

export type tableProps = {
    type: SearchTypeEnum,
}//ToDo put types in types file

const DataTablePage = (props: tableProps) => {
    const {type} = props;
    const navigate = useNavigate();

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', flex: 1,},
        {field: 'name', headerName: 'Name', flex: 1,},
        {field: 'type', headerName: 'Type', flex: 1,},
        {field: 'latitude', headerName: 'Latitude', flex: 1,},
        {field: 'longitude', headerName: 'Longitude', flex: 1,},
    ];

    const rows = TABLE_DATA.map(row => {
        return {
            id: row[0],
            name: row[1],
            type: row[2],
            latitude: row[3],
            longitude: row[4]
        };
    });

    const [selectionModel, setSelectionModel] = React.useState<GridRowSelectionModel>([rows[0].id]);
    //ToDo try to use the entire row as a selection model and not only the id so no filtering is needed when going to search page

    const handleClick = () => {
        const selectedRow = rows.find(r => r.id === selectionModel[0]);

        if (selectedRow)
            navigate(`/${type}/${selectedRow.id}`, {
                state: {
                    latitude: selectedRow.latitude,
                    longitude: selectedRow.longitude,
                }
            });
    }

    columns.unshift({
        field: "radiobutton",
        headerName: "",
        width: 80,
        sortable: false,
        renderCell: (params) =>
            (<Radio checked={selectionModel[0] === params.id} value={params.id}/>)//ToDO change radio button color
    });

    //ToDO remove cell outline when selecting row
    return (
        <div>
            <HeaderContainer>
                <BackButton goToUrl={'/'}/>
                <H2>Selected {type}</H2>
            </HeaderContainer>

            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                pageSizeOptions={[10, 15, 20]}
                rowSelectionModel={selectionModel}
                onRowSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel)
                }}
                hideFooterSelectedRowCount={true}
            />
            <ButtonContainer>
                <PrimaryButton onClick={handleClick}><span>Search</span><Search/></PrimaryButton>
            </ButtonContainer>
        </div>
    );
}

export default DataTablePage;