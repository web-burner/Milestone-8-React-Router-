import axios from "axios";
import { useEffect, useState } from "react";

 export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios("https://raw.githubusercontent.com/web-burner/jsonData-/refs/heads/main/apps.json")
      .then((app) => setData(app.data))
      .catch((err) => setError(err))
      .finally(() => setTimeout(() => {
        setLoading(false)
      }, 150));
  }, []);

  return { data, loading, error };
};

