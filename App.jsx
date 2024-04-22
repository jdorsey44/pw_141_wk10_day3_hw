import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  // State to store the data fetched from the API
  const [data, setData] = useState(null);
  // State to store error messages
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get('http://localhost:5173/');
        
        setData(response.data);
      } catch (error) {
        // Log any errors
        console.error('Error fetching data:', error);
        // Set error state
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>This is My App!</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;