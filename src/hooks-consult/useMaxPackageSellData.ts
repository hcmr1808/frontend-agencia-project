import React, { useEffect, useState } from 'react';

interface Data6 {
  id_package: number,
  max_reservas: number;
}

const useMaxPackageSellData = () => {
  const [data6, setData] = useState<Data6 | null>(null);
  const apiUrl = `http://localhost:8080/consults/bookings/count_package`;

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

  return { data6 };
};

export default useMaxPackageSellData;
