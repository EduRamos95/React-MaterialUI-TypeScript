import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import AppV1 from './CoreAppV1'
import {AppBusqueda} from './CoreBusqueda'
import {AppFile} from './CoreFile'
import {AppProfile} from './CoreProfile'
import {AppUser} from './CoreUsers'
import {core_route} from '../types/interfaz'
import { matchPath } from 'path-to-regexp';


const CoreRoute: Array<core_route> = [
    {
        path: '/',
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
        {/* <Route exact path="/" component={AppV1}>
        </Route> */}
        {/* <Route path="/search2" component={AppBusqueda1}>
        </Route> */}

        {
            CoreRoute.map((rute:core_route): JSX.Element => {
                const match = matchPath(window.location.pathname, {
                path: rute.path,
                exact: true,
                strict: false
                });
            
                if (!match) {
                    return (<br />);
                }
                 return(
                <Route path={rute.path} element={():JSX.Element => rute.render} />
                )
            })
        } 
    </Router>
  );
}

export default AppRoutes;
