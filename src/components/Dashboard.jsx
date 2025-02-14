import React, { useEffect, useState } from 'react';
import companyData from '../data/Company_Status.json';
import processedData from '../data/Processed_Data.json';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    // Combine data from Company_Status and Processed_Data
    const combinedData = companyData.map(company => {
      const processed = processedData.find(data => data.company === company.company) || {};
      return {
        ...company,
        ...processed,
      };
    });
    setAnalytics(combinedData);
  }, []);

  return (
    <div className="dashboard">
      <h1>Analytics Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Average Rating</th>
            <th>Average Sentiment Score</th>
            <th>Review Count</th>
            <th>Rating Sentiment Discrepancy</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.average_rating}</td>
              <td>{item.average_sentiment_score}</td>
              <td>{item.review_count}</td>
              <td>{item.rating_sentiment_discrepancy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;