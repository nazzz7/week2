import React, { useEffect, useState } from 'react';
import { fetchSongs, searchSpotify } from '../api/spotifyService';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getSongs = async () => {
      try {
        const { data } = await fetchSongs();
        setSongs(data.playlists.items);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    getSongs();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await searchSpotify(query);
      setSongs(data.tracks.items);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {songs.map((song) => (
          <div key={song.id}>
            <p>{song.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
