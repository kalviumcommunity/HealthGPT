import React from 'react';
import { FileText, RefreshCw } from 'lucide-react';

const ReportDisplay = ({ analysis, fileName, onReset }) => {
  if (!analysis) return null;

  return (
    <div className="report-display">
      <div className="report-header">
        <div className="file-info">
          <FileText size={20} />
          <h3>{fileName}</h3>
        </div>
        <button onClick={onReset} className="reset-button">
          <RefreshCw size={16} />
          Analyze Another Report
        </button>
      </div>
      <div className="summary-section">
        <h2>AI-Powered Summary</h2>
        <p>{analysis.summary}</p>
      </div>
      <div className="extracted-text-section">
        <h3>Extracted Text</h3>
        <pre>{analysis.extracted_text}</pre>
      </div>
    </div>
  );
};

export default ReportDisplay;
