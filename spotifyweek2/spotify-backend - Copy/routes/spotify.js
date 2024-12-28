const express = require('express');
const axios = require('axios');
const router = express.Router();

const getSpotifyAccessToken = async () => {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: { grant_type: 'client_credentials' },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64')}`,
      },
    });
    return response.data.access_token;
  } catch (err) {
    console.error('Error fetching Spotify access token:', err.message);
    return null;
  }
};

router.get('/songs', async (req, res) => {
  const accessToken = await getSpotifyAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to fetch access token' });

  try {
    const response = await axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching songs:', err.message);
    res.status(500).json({ error: 'Failed to fetch songs from Spotify API' });
  }
});

router.get('/search', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Query parameter is required' });

  const accessToken = await getSpotifyAccessToken();
  if (!accessToken) return res.status(500).json({ error: 'Failed to fetch access token' });

  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { q: query, type: 'track,artist,album', limit: 10 },
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error searching Spotify API:', err.message);
    res.status(500).json({ error: 'Failed to fetch data from Spotify API' });
  }
});

module.exports = router;
