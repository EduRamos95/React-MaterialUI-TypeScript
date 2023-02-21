import { Container, Grid } from '@mui/material';
import React from 'react';
import { NavBar } from '../common/NavBar';
import UploadFiles from '../components/FileUpload';
import { LatMenu } from '../components/LatMenu';

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

        <UploadFiles/>
  
        </Grid>



        <h1>Estoy en CoreFile</h1>
      </Container>
    )
};
