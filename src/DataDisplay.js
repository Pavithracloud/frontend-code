import React, { useState, useEffect } from 'react';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://demo-alb-test-1304044624.ap-south-1.elb.amazonaws.com/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Backend API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;

