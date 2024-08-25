import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LineChart from './LineChart';

const DataVisualization = () => {
  const [sensorData, setSensorData] = useState({ labels: [], values: [] });

  useEffect(() => {
    axios.get('http://localhost:3000/all-sensor-data')
      .then(response => {
        const data = response.data;
        const labels = data.map(item => item.timestamp);
        const values = data.map(item => item.value);

        setSensorData({ labels, values });
      })
      .catch(error => {
        console.error('Error fetching sensor data:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'initial' }}>
      <h1>Visualização de Dados</h1>
      <LineChart data={sensorData} />
    </div>
  );
};

export default DataVisualization;

