import React from 'react';

const ReportDisplay = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="report-display">
      <h2>🩺 AI-Powered Summary</h2>
      <p>{analysis.summary}</p>
    </div>
  );
};

export default ReportDisplay;