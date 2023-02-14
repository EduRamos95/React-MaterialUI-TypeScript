import React, { useState, useContext, useEffect } from 'react';
//import List from '@mui/material/List';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DescriptionIcon from '@mui/icons-material/Description';
import { CircularProgress, Grid, ListItem } from '@mui/material';
//import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { top100Films } from '../assets/top100'
import AssignmentIcon from '@mui/icons-material/Assignment';
//import { grey } from '@mui/material/colors';
import {newDataInversionista , inversionista , convertirInver, converInverM , newInversionista} from '../assets/data_inversionistas'
import {newDataProduct , proDucto , convertirProducto , converProM , newProDucto} from '../assets/data_producto'
import {newDataLevEmi , numLev , convertirLEV, converLevM , newNumLev} from '../assets/data_levantamiento'
import {newDataDocumento , tipoDoc , convertirDOC , converDocM , newTipoDoc} from '../assets/data_documento'
//import { display } from '@mui/system';
import { SelectionContext } from '../context/SelectionContext';


interface deFaultAPI{
    id: number
    name: string
}

export const LatMenu: React.FC<{}> = ():JSX.Element => {

    const initialAPI:deFaultAPI[] = [
        {
            id: 0,
            name:'Loading ...'
        }    
    ]

    const [apiInversionista, setApiInversionista] = useState<newInversionista[]|deFaultAPI[]>(initialAPI)
    const [apiProducto, setApiProducto] = useState<newProDucto[]|deFaultAPI[]>(initialAPI)
    const [apiTipoDoc, setApiTipoDoc] = useState<newTipoDoc[]|deFaultAPI[]>(initialAPI)
    const [apiNumLev, setApiNumLev] = useState<newNumLev[]|deFaultAPI[]>(initialAPI)
    const [loadingAPI, setLoadingAPI] = useState<boolean>(true)
    interface filter{
        text: string,
        icon: JSX.Element,
        path: string,
        tabla: Array<newTipoDoc | newNumLev | newProDucto | newInversionista | deFaultAPI>,
    }
    
    // useEffect(() => {
    //     fetch('http://localhost:8000/inversionista').then(res => res.json()).then(data => setApiInversionista(converInverM(data)));
    //     fetch('http://localhost:8000/tipo_documento').then(res => res.json()).then(data => setApiTipoDoc(converDocM(data)));
    //     fetch('http://localhost:8000/producto').then(res => res.json()).then(data => setApiProducto(converProM(data)));
    //     fetch('http://localhost:8000/levantamiento').then(res => res.json()).then(data => setApiNumLev(converLevM(data)))
    // }, [])

    useEffect(() => {
        const fetchData = () => {
        fetch('http://localhost:8000/inversionista').then(res => res.json()).then(data => setApiInversionista(converInverM(data)));
        fetch('http://localhost:8000/tipo_documento').then(res => res.json()).then(data => setApiTipoDoc(converDocM(data)));
        fetch('http://localhost:8000/producto').then(res => res.json()).then(data => setApiProducto(converProM(data)));
        fetch('http://localhost:8000/levantamiento').then(res => res.json()).then(data => setApiNumLev(converLevM(data)))
        };
        const timer = setTimeout(() => {
            setLoadingAPI(false)
            fetchData();
          }, 5000);
        return () => clearTimeout(timer);
    }, [])


    const FilterItems:Array<filter> = [
        {
            text: 'Inversionista',
            icon: <PersonIcon />,
            path: '/',
            tabla: apiInversionista,
        },
        {
            text: 'Documento',
            icon: <DescriptionIcon />,
            path: '/',
            tabla: apiTipoDoc,
        },
        {
            text: 'Producto',
            icon: <MapsHomeWorkIcon />,
            path: '/',
            tabla: apiProducto,
        },
        {
            text: 'Levantamiento / Emision',
            icon: <AssignmentIcon />,
            path: '/',
            tabla: apiNumLev,
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
                loading={loadingAPI}
                color='neutral'
                id="combo-box-demo"
                options={item.tabla}
                getOptionLabel ={option => option.name}
                sx={{ minWidth: '250px', maxWidth: '80%', }}
                renderInput={(params) => {
                    return(
                        <TextField color='neutral' {...params} label={item.text} size='medium' 
                        InputProps={{ 
                        ...params.InputProps,
                        endAdornment: (
                        <React.Fragment>
                            {loadingAPI ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                        ),
                        }}/>
                    )
                }}
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

