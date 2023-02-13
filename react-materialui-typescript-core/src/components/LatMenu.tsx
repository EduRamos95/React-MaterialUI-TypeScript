import React, { useState, useContext } from 'react';
//import List from '@mui/material/List';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DescriptionIcon from '@mui/icons-material/Description';
import { Grid, ListItem } from '@mui/material';
//import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { top100Films } from '../assets/top100'
import AssignmentIcon from '@mui/icons-material/Assignment';
//import { grey } from '@mui/material/colors';
import {newDataInversionista , newInversionista} from '../assets/data_inversionistas'
import {newDataProduct , newProDucto} from '../assets/data_producto'
import {newDataLevEmi , newNumLev} from '../assets/data_levantamiento'
import {newDataDocumento , newTipoDoc} from '../assets/data_documento'
//import { display } from '@mui/system';
import { SelectionContext } from '../context/SelectionContext';


export const LatMenu: React.FC<{}> = ():JSX.Element => {
    interface filter{
        text: string,
        icon: JSX.Element,
        path: string,
        tabla: Array<newTipoDoc | newNumLev | newProDucto | newInversionista>,
    }
    
    const FilterItems:Array<filter> = [
        {
            text: 'Inversionista',
            icon: <PersonIcon />,
            path: '/',
            tabla: newDataInversionista,
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
// numero de opciones disponible
const { selectedOption1, selectedOption2, selectedOption3, selectedOption4 } = useContext(SelectionContext);
const { setSelectedOption1, setSelectedOption2, setSelectedOption3, setSelectedOption4 } = useContext(SelectionContext);
// captar datos dependiendo evento onChange
 //const [selectedOption1, setSelectedOption1] = useState(null);
 //const [selectedOption2, setSelectedOption2] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
 //const [selectedOption3, setSelectedOption3] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
 //const [selectedOption4, setSelectedOption4] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);

 //const [selectedPER, setSelectedPER] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
 //const [selectedDOC, setSelectedDOC] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
 //const [selectedPROD, setSelectedPROD] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
 //const [selectedLEV, setSelectedLEV] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);

 //selectedOption1 = selectedPER


const optionListSelect = [
    selectedOption1,
    selectedOption2,
    selectedOption3,
    selectedOption4,
]

const optionListSet = [
    setSelectedOption1,
    setSelectedOption2,
    setSelectedOption3,
    setSelectedOption4,
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
        { FilterItems.map((item, index) => {
            let selectedOption: newTipoDoc | newNumLev | newProDucto | newInversionista | null;
            let setSelectedOption:React.Dispatch<React.SetStateAction<newTipoDoc | newNumLev | newProDucto | newInversionista | null>>;
            
            selectedOption = optionListSelect[index];
            setSelectedOption = optionListSet[index];

            return (
            <Grid item sx={{
                display:'flex',
                alignItems: 'center',
                }}>
            <ListItem 
                key={item.text}
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
                onChange={(event, newValue) => setSelectedOption(newValue as newTipoDoc | newNumLev | newProDucto | newInversionista | null)}
                />
                </ListItemText>
            </ListItem>
            { selectedOption && <p>El ID seleccionado es actual: {selectedOption.id}</p> }
            </Grid>
            
            )}
        )}
    <p> / {selectedOption1?.id} / and / {selectedOption1?.name} / ◄☼► </p><br />
    <p> / {selectedOption2?.id} / and / {selectedOption2?.name} / ◄☼► </p><br />
    <p> / {selectedOption3?.id} / and / {selectedOption3?.name} / ◄☼► </p><br />
    <p> / {selectedOption4?.id} / and / {selectedOption4?.name} /  </p><br />
    </Grid>
)
};

