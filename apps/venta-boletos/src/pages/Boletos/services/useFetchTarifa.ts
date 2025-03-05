import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchTarifa = (url: string, body?: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(url, body);
        setData(response.data);
      } catch (err) {
        setError('Error al obtener los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, body]);

  return { data, loading, error };
};

export default useFetchTarifa;