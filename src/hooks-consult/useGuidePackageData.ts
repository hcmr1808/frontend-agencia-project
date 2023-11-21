import React, { useEffect, useState } from 'react';

interface Data2 {
  description: string;
}

const useGuidePackageData = (packageName: string) => {
  const [data2, setData2] = useState<Data2 | null>(null);
  const apiUrl = `http://localhost:8080/consults/packages/${packageName}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData2(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data2 };
};

export default useGuidePackageData;
