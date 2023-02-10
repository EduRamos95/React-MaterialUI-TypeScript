import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import AppV1 from './CoreAppV1'
//import AppBusqueda1 from './CoreBusquedaTEST'
import {AppBusqueda} from './CoreBusqueda'
import {AppFile} from './CoreFile'
import {AppProfile} from './CoreProfile'
import {AppUser} from './CoreUsers'
import {core_route} from '../types/interfaz'


const CoreRoute: core_route[] = [
    {
        path: '/app',
        render: <AppV1/>
        //render: () => {return(<AppBusqueda />)},
        //render: AppBusqueda,
    },
    {
        path: '/search',
        render: <AppBusqueda/>
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
  return (
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
  );
}

export default AppRoutes;
