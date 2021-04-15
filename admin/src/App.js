import Admin from './components/Admin';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Profile from './components/ProfileSettings'
import Login from './components/Login';
import Nav from './components/Nav';
import HeaderNav from './components/Helpers/HeaderNav';


function App() {
  console.log(localStorage.getItem("isAuth"), "app");
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact>
          {localStorage.getItem("isAuth") ? <Admin /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        <Route path="/profile" exact>
          {localStorage.getItem("isAuth") ? <Profile /> : <Redirect to={{ pathname: "/login" }} />}
        </Route>
        <Route path="/login" exact>
          {localStorage.getItem("isAuth") ? <Redirect to={{ pathname: "/admin" }} /> : <Login />}
        </Route>
        <Route path="/" exact>
          {console.log("in root")}
          <Redirect to={{ pathname: "/admin" }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
