import React, { useEffect, useState } from 'react';

interface Data5 {
  count_sells: number;
  workload: number;
}

const useCountSellsData = (packageName: string) => {
  const [data5, setData5] = useState<Data5 | null>(null);
  const apiUrl = `http://localhost:8080/consults/bookings/count_sells/${packageName}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData5(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data5 };
};

export default useCountSellsData;
