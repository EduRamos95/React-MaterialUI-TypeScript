import React, {useContext, useState}from 'react';
import Dropzone from 'react-dropzone';
import './Fileupload.css'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { red } from '@mui/material/colors';
import { Button, Grid, Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import BackspaceIcon from '@mui/icons-material/Backspace';
//import { start } from 'repl';
import { SelectionContext } from '../context/SelectionContext';
import { margin, palette } from '@mui/system';
import { themePalette } from '../config/theme.condig';



const UploadFiles: React.FC = () => {
  
  const [dataFile, setDataFile] = useState<File | null>(null)
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length !== 1){
      console.log('Error no upload');
    }else{
      setDataFile(acceptedFiles[0]);
      !dataFile ? setIsDisabled(true) : setIsDisabled(false);
      console.log(acceptedFiles);
      console.log(acceptedFiles[0].name);
      console.log(acceptedFiles[0].size);
      console.log(acceptedFiles[0].type);
    }
      
  };
  
  const Borrar = () => {
    setIsDisabled(false)
    setDataFile(null)
  }
  
  const { selectedOption1, selectedOption2, selectedOption3, selectedOption4 } = useContext(SelectionContext);

  return (
    <Grid container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      }}>
      <Grid item sx={{display: 'flex'}}>
      <div id='filedrop'>
      <Dropzone onDrop={onDrop} disabled={isDisabled}>
        {({ getRootProps, getInputProps }) => (
          <section id='secdrop'>
            <div id='dentro' {...getRootProps()}>
              <UploadFileIcon sx={{
                bg: red[500],
               // height: '100px',
                fontSize: '200px',
                borderStyle: dataFile ? 'groove' : 'dashed',
                borderColor: dataFile ? themePalette.NARANJACORE : '', 
                borderWidth: dataFile ? '8px' : '3px',
              }}/>
              <input {...getInputProps()} />
            </div>
          </section>
        )}
      </Dropzone>
      </div>
      </Grid>

      <Grid item sx={{display: 'flex'}}>
      <Button variant='contained'
        sx={{
          display: 'flex'
        }}> 
        <Typography sx={{display: 'flex', m: '0em 0.2em 0em 0.2em'}} variant='h6' component={'h6'}> 
          Subir archivo 
        </Typography> 
        <UploadIcon sx={{
                display: 'flex',
                bg: red[500],
               // height: '100px',
                fontSize: '2em',
                borderStyle: 'none',
                m: '0em 0em 0em 0.2em', 
              }} />
      </Button>
      </Grid>

      {
        dataFile && 
        <Grid item sx={{
          display: 'flex',
          margin: '1em',
          }}> 
        <Typography 
          variant='h6' component={'h6'}
          sx={{
            display: 'block',
            m: '0em 1em',
            }}> 
          File Listo: {dataFile.name} 
        </Typography> 
        <BackspaceIcon onClick={() => Borrar() } 
          sx={{
                display: 'block',
                bg: red[500],
                fontSize: '2em',
                borderStyle: 'none',
              }} />
        </Grid>
      }
      <Grid item sx={{display: 'flex'}}>
      <h6>persona valor: {selectedOption1?.id}</h6>
      <h6>doc valor: {selectedOption2?.id}</h6>
      <h6>producto valor: {selectedOption3?.id}</h6>
      <h6>lev valor: {selectedOption4?.id}</h6>
      
      </Grid>
      <h1>Fileupload Component</h1>
    </Grid>
  );
};

export default UploadFiles;