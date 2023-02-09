import React from 'react';
import { Container, Grid } from '@mui/material';
import {NavBar} from '../common/NavBar'
export const AppProfile: React.FunctionComponent<{}> = ():JSX.Element => {
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
        <h1>Estoy en Profile</h1>
      </Container>
    )
};