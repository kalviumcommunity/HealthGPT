import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';

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
    disabled: loading,
  });

  return (
    <div {...getRootProps()} className={`file-upload-container ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      <div className="upload-icon">
        <UploadCloud size={48} />
      </div>
      {isDragActive ? (
        <p>Drop the report here ...</p>
      ) : (
        <p>Drag & drop your PDF report here, or click to select</p>
      )}
      <span className="file-types">Supports: PDF</span>
    </div>
  );
};

export default FileUpload;
