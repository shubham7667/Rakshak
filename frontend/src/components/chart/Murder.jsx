import React, { useState, useEffect } from 'react';
import { Doughnut, Line,Bar,Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const Murder = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Cases Reported Throughout 2025',
        data: [],
        backgroundColor: [],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateColors = (num) => {
    const colors = [];
    for (let i = 0; i < num; i++) {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      colors.push(`rgba(${r}, ${g}, ${b}, 0.6)`);
    }
    return colors;
  };

  const transformDataForChart = (rawData) => {
    if (rawData && Array.isArray(rawData) && rawData.length > 0) {
      const labels = rawData.map(item => item.crime_head);
      const dataPoints = rawData.map(item => parseInt(item.cases_reported_during_the_year) || 0);
      const colors = generateColors(labels.length);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Cases Reported Throughout 2025',
            data: dataPoints,
            backgroundColor: colors,
            borderColor: '#fff',
            borderWidth: 1,
          },
        ],
      });
    } else {
      setError(new Error('No valid crime data found or data format is incorrect.'));
    }
  };

  useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        const apiUrl =
          `https://api.data.gov.in/resource/9fed9e21-d687-4c24-aa6e-63cb24bb68d3?api-key=${import.meta.env.VITE_MURDER_API_KEY}&format=json&limit=142`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (response.ok) {
          transformDataForChart(result.records);
        } else {
          setError(new Error(result.message || 'Failed to fetch data from API.'));
        }
      } catch (err) {
        setError(new Error('Network error or unable to connect to the API.'));
      } finally {
        setLoading(false);
      }
    };

    fetchCrimeData();
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#374151',
          font: { size: 14, family: 'Inter, sans-serif' }
        }
      },
      title: {
        display: true,
    
        color: '#0ea5e9',
        font: { size: 20, weight: 'bold', family: 'Inter, sans-serif' }
      },
    },
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl shadow-lg">
        <svg className="animate-spin h-10 w-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
        <p className="text-lg text-blue-700 font-semibold">Loading crime data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-96 bg-gradient-to-br from-red-100 to-pink-200 rounded-xl shadow-lg">
        <p className="text-lg text-red-700 font-semibold">Error: {error.message}</p>
        <p className="text-sm text-gray-500">Please try again later or check your network connection.</p>
      </div>
    );
  }

  return (
    <div className="min-h-auto flex items-start justify-between ml-10 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-150 h-100 flex flex-col items-center gap-8 border border-blue-100">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 mb-2 text-center">
            
        </h2>
        <p className="text-gray-500 text-center mb-4">
          Head-wise distribution of reported cases in India. Data from <span className="font-semibold text-blue-600">data.gov.in</span>
        </p>
        <div className="w-full border-b border-blue-100 mb-4"></div>
        <div style={{ height: '100%', width: '100%' }} className="flex items-center justify-center">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Murder;
