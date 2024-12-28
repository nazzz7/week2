
import './Profile.css';

const Profile = () => {
  // Placeholder user data
  const user = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    privateAlbums: [
      { name: 'Chill Vibes', tracks: ['Track 1', 'Track 2'] },
      { name: 'Workout', tracks: ['Track 3', 'Track 4'] },
    ],
    playlists: [
      { name: 'Favorites', tracks: ['Track 5', 'Track 6'] },
    ],
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <h2>Private Albums</h2>
      {user.privateAlbums.map((album, index) => (
        <div key={index}>
          <h3>{album.name}</h3>
          <ul>
            {album.tracks.map((track, i) => (
              <li key={i}>{track}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Playlists</h2>
      {user.playlists.map((playlist, index) => (
        <div key={index}>
          <h3>{playlist.name}</h3>
          <ul>
            {playlist.tracks.map((track, i) => (
              <li key={i}>{track}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Profile;
