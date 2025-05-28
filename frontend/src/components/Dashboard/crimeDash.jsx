import React, { useEffect, useState } from 'react';

const CrimeDash = () => {
  const [crimeData, setCrimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2015&enddate=9%2F25%2F2015&long=-122.5076392&lat=37.757815';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '87ae62f748msh7afe55c4e0252dcp1ca7a2jsn58459b66ae78',
          'x-rapidapi-host': 'jgentes-Crime-Data-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCrimeData(result || []);
      } catch (error) {
        console.error('Error fetching crime data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-700">📍 Crime Data Dashboard</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading crime data...</p>
      ) : crimeData.length === 0 ? (
        <p className="text-center text-gray-600">No data found for this period/location.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {crimeData.map((crime, idx) => (
            <div
              key={idx}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                {crime.category || 'Unknown Category'}
              </h2>
              <p><strong>Date:</strong> {crime.date}</p>
              <p><strong>Description:</strong> {crime.descript}</p>
              <p><strong>Address:</strong> {crime.address}</p>
              <p><strong>Resolution:</strong> {crime.resolution}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrimeDash;
