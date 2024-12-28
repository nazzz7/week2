import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Spotify 2.0</h1>
      <div className="artists">
        <div className="artist">
          <img src="artist1.jpg" alt="Artist 1" className="artist-image" />
          <p className="artist-name">Artist 1</p>
        </div>
        <div className="artist">
          <img src="artist2.jpg" alt="Artist 2" className="artist-image" />
          <p className="artist-name">Artist 2</p>
        </div>
        {/* Add more artists as needed */}
      </div>
      <button className="login-button" onClick={() => window.location.href='/login'}>Login</button>
    </div>
  );
}

export default Home;