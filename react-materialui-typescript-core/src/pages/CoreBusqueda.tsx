import React from 'react';
// import logo from '../logo.svg';
import '../styles/CoreAppV1.css';
import {Button, Container, Grid} from "@mui/material"
import { NavBar } from '../common/NavBar';
import { LatMenu } from '../components/LatMenu'
import { display } from '@mui/system';

export const AppBusqueda: React.FunctionComponent<{}> = ():JSX.Element => {
//export default function AppBusqueda(){
  return (
    <Container>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',

      }}>

      <Grid item sx={{
        display: 'flex',
      }}>
      <NavBar />
      </Grid>

      <Grid item sx={{
        display: 'flex',
      }}>
      <LatMenu />
      
      </Grid>

      </Grid>
      <h1 style={{ display:'flex' }}>Estoy en Busqueda</h1>
    </Container>
    
  );
};

function AppBusqueda1() {
  //export default function AppBusqueda(){
    return (
      <Container>
        <Grid sx={{
          display: 'flex',
          flexDirection: 'column',
  
        }}>
  
        <Grid item sx={{
          display: 'flex',
        }}>
        <NavBar />
        </Grid>
  
        <Grid item sx={{
          display: 'flex',
        }}>
        <LatMenu />
        
        </Grid>
  
        </Grid>
        <h1 style={{ display:'flex' }}>Estoy en Busqueda</h1>
      </Container>
      
    );
  };

  export default AppBusqueda1;