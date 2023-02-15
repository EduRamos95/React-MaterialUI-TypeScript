import React, { useState, useContext } from 'react';
import '../styles/CoreAppV1.css';
import {Button, Container, Grid, Typography} from "@mui/material"
//import { NavBar } from '../common/NavBar';
//import { LatMenu } from '../components/LatMenu'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { SelectionContext } from '../context/SelectionContext';


export const TableBusqueda: React.FunctionComponent<{}> = ():JSX.Element => {

//// importar 4 datos 
const { selectedOption1, selectedOption2, selectedOption3, selectedOption4 } = useContext(SelectionContext);
// const { setSelectedOption1, setSelectedOption2, setSelectedOption3, setSelectedOption4 } = useContext(SelectionContext);
//export default function AppBusqueda(){

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const [showTable, setShowTable] = useState(false);

  const handleShow = () => {
    setShowTable(true);
  };

  const handleHide = () => {
    setShowTable(false);
  };


  return (
    <Container>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Grid item sx={{
        display: 'block',
        width: 'inherit',
      }}>
        <Button onClick={handleShow} variant='contained' color='primary' sx={{mt:1, mb:1, width:'100%'}}  startIcon={<FilterAltOutlinedIcon />}>
        <Typography variant="h5" component="h2">Filtrar</Typography>
        </Button>
      </Grid>

      <Grid item sx={{
        display: 'block',
        width: 'inherit',
      }}>
      {showTable && (
        <div>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
             // checkboxSelection
              sx={{
                mt: 1,
                p: 2,
                boxShadow: 2,
                border: 2,
                backgroundColor: '#ffffff',
                opacity: '1',
                borderColor: 'neutral.main',
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
            />
          </div>
          <Button onClick={handleHide}>Ocultar Tabla</Button>
        </div>
      )}
      </Grid>
      </Grid>
      <h1 style={{ display:'flex' }}>TableBusqueda Component</h1>
      <h4>persona valor: {selectedOption1?.id}</h4>
      <h4>doc valor: {selectedOption2?.id}</h4>
      <h4>producto valor: {selectedOption3?.id}</h4>
      <h4>lev valor: {selectedOption4?.id}</h4>
    </Container>
    
  );
};