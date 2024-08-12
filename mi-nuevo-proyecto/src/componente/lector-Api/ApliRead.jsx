import React, { useState, useEffect } from 'react';

const ItunesSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://itunes.apple.com/search?term=jack+johnson');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>iTunes Search Results for "Jack Johnson"</h1>
      <ul>
        {results.map((item) => (
          <li key={item.trackId}>
            <p><strong>{item.trackName}</strong> by {item.artistName}</p>
            <p>Album: {item.collectionName}</p>
            <audio controls>
              <source src={item.previewUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItunesSearch;
