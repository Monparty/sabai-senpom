"use client"

import { useState, useEffect } from 'react';

export default function page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/services');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
        {data ? (
          data && data.map((item, index) => (
            <div key={index}>
              <h2>{item.id}</h2>
              <h2>{item.name}</h2>
              <p>{item.detail}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}