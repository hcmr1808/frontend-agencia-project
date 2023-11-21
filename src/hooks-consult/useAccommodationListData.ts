import React, { useEffect, useState } from 'react';

interface Data4 {
  name: string;
}

const useAccommodationListData = (packageName: string) => {
  const [data4, setData4] = useState<Data4[] | null>(null);
  const apiUrl = `http://localhost:8080/consults/package_accommodation/${packageName}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData4(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data4 };
};

export default useAccommodationListData;
