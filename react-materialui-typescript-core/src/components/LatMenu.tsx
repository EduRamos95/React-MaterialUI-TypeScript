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
import { wrap } from 'module';

export const LatMenu: React.FunctionComponent<{}> = ():JSX.Element => {
    const FilterItems = [
        {
            text: 'Persona',
            icon: <PersonIcon />,
            path: '/'
        },
        {
            text: 'Documento',
            icon: <DescriptionIcon />,
            path: '/'
        },
        {
            text: 'Producto',
            icon: <MapsHomeWorkIcon />,
            path: '/'
        },
        {
            text: 'Levantamiento / Emision',
            icon: <DescriptionIcon />,
            path: '/'
        }
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
                  // key={item.text}
                  sx={{display:'flex'}}>
                    <ListItemText >
                    <ListItemIcon >{item.icon}</ListItemIcon>
                    <Autocomplete
                    disablePortal
                    
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ minWidth: '250px', maxWidth: '80%', }}
                    renderInput={(params) => <TextField {...params} label={item.text} />}
                    />
                    </ListItemText>
                </ListItem>
                </Grid>
            ))}
        </Grid>
    )
}


