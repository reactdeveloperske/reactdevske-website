import './App.css';
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
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/members" component={MembersPage}/>
          <Route path="/events" component={EventPage}/>
          <Route path="/contact" component={ContactPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
