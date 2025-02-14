import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [companyData, setCompanyData] = useState([]);
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const companyResponse = await fetch('./data/Company_Status.json');
      const processedResponse = await fetch('./data/Processed_Data.json');
      const companyJson = await companyResponse.json();
      const processedJson = await processedResponse.json();
      setCompanyData(companyJson);
      setProcessedData(processedJson);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Dashboard Analytics</h1>
      <Dashboard companyData={companyData} processedData={processedData} />
    </div>
  );
}

export default App;