import { useState, useEffect } from "react";

const useApiRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://example.com/api");
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || "Error en la llamada a la API");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useApiRequest;
