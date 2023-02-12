import { Route , Routes, BrowserRouter as Router } from 'react-router-dom';
import React, {useState} from 'react';
import AppV1 from './CoreAppV1'
//import AppBusqueda1 from './CoreBusquedaTEST'
import {AppBusqueda} from './CoreBusqueda'
import {AppBusquedav2} from './CoreBusqueda2'
import {AppFile} from './CoreFile'
import {AppProfile} from './CoreProfile'
import {AppUser} from './CoreUsers'
import {core_route} from '../types/interfaz'
import {SelectionContext} from '../context/SelectionContext';
import {newInversionista} from '../assets/data_inversionistas'
import {newProDucto} from '../assets/data_producto'
import {newNumLev} from '../assets/data_levantamiento'
import {newTipoDoc} from '../assets/data_documento'

const CoreRoute: core_route[] = [
    {
        path: '/app',
        render: <AppV1/>
        //render: () => {return(<AppBusqueda />)},
        //render: AppBusqueda,
    },
    {
        path: '/search',
        render: <AppBusquedav2/>
        //render: () => {return(<AppBusqueda />)},
        //render: AppBusqueda,
    },
    {
        path: '/file',
        render: <AppFile />,
        //render: AppFile,
    },
    {
        path: '/profile',
        render: <AppProfile />,
        //render: AppProfile,
    },
    {
        path: '/user',
        render: <AppUser />,
        //render: AppUser,
    },
]

function AppRoutes() {
  const [selectedOption1, setSelectedOption1] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
  const [selectedOption4, setSelectedOption4] = useState<newTipoDoc | newNumLev | newProDucto | newInversionista | null>(null);
  return (
    <SelectionContext.Provider
      value={{
        selectedOption1,
        setSelectedOption1,
        selectedOption2,
        setSelectedOption2,
        selectedOption3,
        setSelectedOption3,
        selectedOption4,
        setSelectedOption4,
      }}
    >
    <Router>
        <Routes>
            {
                CoreRoute.map((rute:core_route): JSX.Element => {
                    return(
                    <Route path={rute.path} element={rute.render} />
                    )
                })
            } 
        </Routes>
    </Router>
    </SelectionContext.Provider>
  );
}

export default AppRoutes;
