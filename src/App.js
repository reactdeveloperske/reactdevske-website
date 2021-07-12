import logo from './reactdevske.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import MembersPage from './Pages/MembersPage/MembersPage';
import EventPage from './Pages/EventsPage/EventPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/members" component={MembersPage}/>
          <Route path="/events" component={EventPage}/>
          <Route path="/contact" component={ContactPage}/>
        </Switch>
      </Router>

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
