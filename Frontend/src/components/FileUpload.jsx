import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload, loading }) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="file-upload-container">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the report here ...</p>
      ) : (
        <p>Drag & drop your PDF report here, or click to select</p>
      )}
    </div>
  );
};

export default FileUpload;