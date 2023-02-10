import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DescriptionIcon from '@mui/icons-material/Description';
import { Grid, ListItem } from '@mui/material';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../assets/top100'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { grey } from '@mui/material/colors';
import {newDataUser , newuSer} from '../assets/data_users'
import {newDataProduct , newProDucto} from '../assets/data_producto'
import {newDataLevEmi , newNumLev} from '../assets/data_levantamiento'
import {newDataDocumento , newTipoDoc} from '../assets/data_documento'

export const LatMenu: React.FunctionComponent<{}> = ():JSX.Element => {
    interface filter{
        text: string,
        icon: JSX.Element,
        path: string,
        tabla: Array<newTipoDoc | newNumLev | newProDucto | newuSer >
    }
    
    const FilterItems:Array<filter> = [
        {
            text: 'Persona',
            icon: <PersonIcon />,
            path: '/',
            tabla: newDataUser,
        },
        {
            text: 'Documento',
            icon: <DescriptionIcon />,
            path: '/',
            tabla: newDataDocumento,
        },
        {
            text: 'Producto',
            icon: <MapsHomeWorkIcon />,
            path: '/',
            tabla: newDataProduct,
        },
        {
            text: 'Levantamiento / Emision',
            icon: <AssignmentIcon />,
            path: '/',
            tabla: newDataLevEmi,
        },
    ] 

    return (
        <Grid sx={
            {
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            minWidth: '200px',
            maxWidth: '100%',
            }}>
            { FilterItems.map(item => (
                <Grid item sx={{
                    display:'flex',
                    alignItems: 'center',
                    }}>
                <ListItem 
                  // key={}
                  sx={{display:'flex'}}>
                    <ListItemText >
                    <ListItemIcon color='#000'>{item.icon}</ListItemIcon>
                    <Autocomplete
                    disablePortal
                    color='neutral'
                    id="combo-box-demo"
                    options={item.tabla}
                    getOptionLabel ={option => option.name}
                    sx={{ minWidth: '250px', maxWidth: '80%', }}
                    renderInput={(params) => <TextField color='neutral' {...params} label={item.text} size='medium'/>}
                    />
                    </ListItemText>
                </ListItem>
                </Grid>
            ))}
        </Grid>
    )
}


