import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";

const useFetch = (endPoint) => {
  const [data, setData] = useState(null); // Default to null or an empty object
  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await fetchDataFromApi(endPoint);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Ensure data is reset to null on error
      }
    };

    makeApiCall();
  }, [endPoint]);

  return { data }; // Always return an object with a `data` key
};

export default useFetch;
