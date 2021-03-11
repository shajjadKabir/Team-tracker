import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Team from './components/Team/Team';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Banner from './components/Banner/Banner';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Banner/>
          <Team/>
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
