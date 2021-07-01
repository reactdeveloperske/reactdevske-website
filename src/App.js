import logo from './reactdevske.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contribute to creating The Reactjs Developer Community Kenya Website Here 
        </p>
        <a
          className="App-link"
          href="https://github.com/reactdeveloperske/reactdevske-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on Github
        </a>
        <a
          className="App-link"
          href="http://bit.ly/joinreactdevske"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our Telegram Community Chat
        </a>
      </header>
    </div>
  );
}

export default App;
