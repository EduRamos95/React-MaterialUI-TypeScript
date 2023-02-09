import React from 'react';
// import logo from '../logo.svg';
import '../styles/CoreAppV1.css';
import {Button, Container, Grid} from "@mui/material"
import { NavBar } from '../common/NavBar';
import { LatMenu } from '../components/LatMenu'

function AppV1() {
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
      
      </Grid>

      </Grid>
      <h1> Estoy dentro de la APPCore </h1>
    </Container>
    
  );
}

export default AppV1;