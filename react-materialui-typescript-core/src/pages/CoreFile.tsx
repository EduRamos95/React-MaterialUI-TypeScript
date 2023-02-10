import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import {NavBar} from '../common/NavBar'
import { LatMenu } from '../components/LatMenu'

export const AppFile: React.FunctionComponent<{}> = ():JSX.Element => {
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
        <h1>Estoy en CoreFile</h1>
      </Container>
    )
};
