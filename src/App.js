import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="assets/images/blt-w.png" className="App-logo" alt="logo" width={100} />
        <h3>
          Welcome to
        </h3>
        <h1>
          [Black-League]
        </h1>
        <p>
          This is the Official Site of the Black-League.
          We are a group of Developers, Tech Enthusiasts, Digital Artists , Gamers and Content Creators.
          Who are dedicated to create some awesome stuff for the community. And we are here to help each other in various IT related fields.
        </p>
        <span>
          ⚠
          This site is still under development.
          ⚠
        </span>
        <div className='btn-container'>
          <button className='btn'>
            <a href='https://github.com/Black-League' target='_blank' rel='noopener noreferrer'>
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </button>
          <button className='btn discord'>
            <a href='https://discord.gg/yp9etySYjV' target='_blank' rel='noopener noreferrer'>
              <i className="fab fa-discord"></i>
              Discord
            </a>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
