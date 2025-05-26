import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Crimechart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Cases Reported During throughout 2025',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const transformDataForChart = (rawData) => {
    if (rawData && Array.isArray(rawData) && rawData.length > 0) {
      const labels = rawData.map(item => item.crime_head);
      const dataPoints = rawData.map(item => parseInt(item.cases_reported_during_the_year) || 0);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Cases Reported throughout 2025',
            data: dataPoints,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
        const apiUrl = 'https://api.data.gov.in/resource/9fed9e21-d687-4c24-aa6e-63cb24bb68d3?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=142'; // Replace YOUR_API_KEY
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (response.ok) {
          console.log('Data fetched successfully:', result.records);
          transformDataForChart(result.records);
        } else {
          console.error("Error while fetching the data from the server:", result.message || 'Unknown error');
          setError(new Error(result.message || 'Failed to fetch data from API.'));
        }
      } catch (err) {
        console.error('Fetch error:', err);
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
        position: 'top',
      },
      title: {
        display: true,
        text: 'Crime Cases Reported in 2019-2025 (Head-wise)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Crime Head',
        },
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Cases',
        },
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-700">Loading crime data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-600">
        <p className="text-lg">Error: {error.message}</p>
        <p className="text-sm text-gray-500">Please try again later or check your network connection.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg max-w-4xl mx-auto my-8 flex flex-col gap-10 justify-center items-center">
        
            <h1 className='text-4xl font-bold '>Crime Cases Reported in India</h1>
       
      <div style={{ height: '500px', width:'820px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>

<div className='flex flex-col gap-10 '>

<p >This section presents a visual analysis of the number of crime cases reported across India from  year 2019-2025, categorized by different crime heads as defined by the Indian Penal Code (IPC). The data visualized below is sourced from the National Crime Records Bureau (NCRB) through the data.gov.in open data platform.</p>

<h2 className='text-2xl font-bold'>Key Insights from the Chart:</h2>

<p>The bar chart displays the reported number of incidents for various crime categories, allowing for a direct comparison of the prevalence of different types of offenses across the nation during 2019-2025. By examining the height of each bar, you can quickly identify the crime heads with the highest and lowest number of reported cases.</p>


<h2 className='text-2xl font-bold'>Understanding the Data:</h2>



<p>The data presented here focuses specifically on the "Crime Head-wise Police Disposal of IPC Crime Cases (Crime Head-wise) during 2019-2025" dataset available on data.gov.in. The categories on the horizontal axis represent different classifications of crimes under the IPC, while the vertical axis indicates the total number of cases reported for each category during the specified year.

Technical Note: This chart is dynamically generated using data fetched in real-time from the data.gov.in API. The information is processed and visualized using JavaScript charting libraries to provide an interactive and informative representation of the national crime statistics from 2019-2025.</p>






</div>




    </div>
  );
};

export default Crimechart;