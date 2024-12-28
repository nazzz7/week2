
import { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/spotify/search?query=${query}`);
      const data = await response.json();
      setResults(data.tracks.items);
    } catch (err) {
      console.error('Error fetching search results:', err);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Spotify 2.0</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for artists, songs, or albums"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <div className="results">
        {results.map((item) => (
          <div key={item.id} className="result-item">
            <h3>{item.name}</h3>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
