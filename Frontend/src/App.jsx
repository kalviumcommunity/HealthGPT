import React, { useState } from 'react';
import './styles/App.css';
import FileUpload from './components/FileUpload';
import Loader from './components/Loader';
import ReportDisplay from './components/ReportDisplay';
import { analyzeReport } from './api/apiClient';

function App() {
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = async (file) => {
    setLoading(true);
    setAnalysis(null);
    setError('');
    setFileName(file.name);

    try {
      const response = await analyzeReport(file);
      setAnalysis(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || 'An unexpected error occurred.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setAnalysis(null);
    setError('');
    setFileName('');
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🩺 HealthGPT</h1>
        <p>Your personal AI medical assistant. Understand your reports with ease.</p>
      </header>

      <main className="main-content">
        {!analysis && !loading && (
          <FileUpload onFileUpload={handleFileUpload} loading={loading} />
        )}
        {loading && <Loader />}
        {error && <p className="error-message">{error}</p>}
        {analysis && (
          <ReportDisplay
            analysis={analysis}
            fileName={fileName}
            onReset={handleReset}
          />
        )}
      </main>
      
      <footer className='footer'>
        <p>Disclaimer: HealthGPT is not a substitute for professional medical advice. Always consult a qualified healthcare provider.</p>
      </footer>
    </div>
  );
}

export default App;
