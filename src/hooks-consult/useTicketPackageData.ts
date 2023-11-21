import React, { useEffect, useState } from 'react';

interface Data3 {
  date: string;
}

const useTicketPackageData = (packageName: string) => {
  const [data3, setData3] = useState<Data3 | null>(null);
  const apiUrl = `http://localhost:8080/consults/bookings/date/${packageName}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData3(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data3 };
};

export default useTicketPackageData;
