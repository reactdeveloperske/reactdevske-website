import logo from './reactdevske.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contribute to creating The Kenya React Developer Community Website Here 
        </p>
        <a
          className="App-link"
          href="https://github.com/reactdeveloperske/reactdevske-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on Github
        </a>
      </header>
    </div>
  );
}

export default App;
