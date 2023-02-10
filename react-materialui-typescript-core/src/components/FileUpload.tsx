import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Dropzone from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function UploadFiles() {
  const classes = useStyles();
  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  return (
    <div className={classes.root}>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arrastra y suelta archivos aquí o haz clic para seleccionarlos</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}