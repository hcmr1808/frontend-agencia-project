import React, { useEffect, useState } from 'react';

interface Data {
  count: number;
  title: string;
}

const useCountPackageData = (packageName: string) => {
  const [data, setData] = useState<Data | null>(null);
  const apiUrl = `http://localhost:8080/consults/bookings/${packageName}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data };
};

export default useCountPackageData;
