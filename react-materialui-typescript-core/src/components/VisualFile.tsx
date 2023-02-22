import React, { useState } from 'react';
import {Button} from '@mui/material';

interface PropsDocUrl{
    documentUrl:string
}

export function DocumentPreviewButton({ documentUrl }:PropsDocUrl):JSX.Element {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewClick = () => {
    window.open(`https://docs.google.com/viewer?url=${encodeURIComponent(documentUrl)}&embedded=true`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600");
  };

  const handleDownloadClick = () => {
    window.open(documentUrl, '_blank');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePreviewClick}>
        Visualizar
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDownloadClick}>
        Descargar
      </Button>
      {isPreviewOpen && (
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(documentUrl)}&embedded=true`}
          title="Vista previa del documento"
          width="80%"
          height="500px"
        />
      )}
    </div>
  );
}
