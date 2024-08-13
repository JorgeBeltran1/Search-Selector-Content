import React, { useEffect, useState } from "react";

export default function ITunesSearch({ searchUrl }) {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          if (searchUrl) {
            console.log('====================================');
            console.log(searchUrl);
            console.log('====================================');
              setLoading(true);
              setError(null);
              try {
                  const response = await fetch(searchUrl);
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  const data = await response.json();
                  setResults(data);
              } catch (error) {
                  setError(`Failed to fetch: ${error.message}`);
              } finally {
                  setLoading(false);
              }
          }
      };

      fetchData();
  }, [searchUrl]);

  if (loading) {
      return <p>Loading...</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

    return (
        <div>
            {results ? (
                <pre>{JSON.stringify(results, null, 2)}</pre>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}
