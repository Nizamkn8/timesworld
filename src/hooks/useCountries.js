import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [region, setRegion] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching the countries data using custom hooks
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v2/all?fields=name,region,flag");
        if (!res.ok) throw new Error("Failed to fetch countries");
        const data = await res.json();
        setCountries(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (region === "All") {
      setFiltered(countries);
    } else {
      setFiltered(countries.filter((c) => c.region === region));
    }
  }, [region, countries]);

  return { countries, filtered, region, setRegion, loading, error };
};
