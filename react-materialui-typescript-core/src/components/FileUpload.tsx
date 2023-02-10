import React from 'react';
import Dropzone from 'react-dropzone';
import './Fileupload.css'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { red } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { start } from 'repl';
// interface Styles {
//   root: React.CSSProperties;
// }

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: 16,
//       width: 128,
//       height: 128,
//     },
//   },
// };

const UploadFiles: React.FC = () => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1){
      console.log('Error no upload');
    }else{
      console.log(acceptedFiles);
      console.log(acceptedFiles[0].name);
      console.log(acceptedFiles[0].size);
      console.log(acceptedFiles[0].type);
    }
      
  };

  return (
    <div id='filedrop'>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section id='secdrop'>
            <div id='dentro' {...getRootProps()}>
              <UploadFileIcon sx={{
                bg: red[500],
               // height: '100px',
                fontSize: '200px',
                borderStyle: 'dashed', 
              }}/>
              <input {...getInputProps()} />
            </div>
            <Grid
            sx={{
              display: 'flex',
              flexWrap: 'wrap'

            }}>
              <Grid item sx={{
                display: 'flex',
                //alignSelf: 'flex-end'
              }}>
              <Button variant='contained'> <Typography sx={{display: 'flex'}} variant='h6' component={'h6'}> Subir archivo </Typography> <UploadIcon sx={{
                bg: red[500],
               // height: '100px',
                fontSize: '4em',
                borderStyle: 'none',
              }} /></Button>
              </Grid>


            </Grid>
  
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default UploadFiles;