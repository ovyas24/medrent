import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';
import Shop from './components/Shop';
import About from './components/about';
import Contact from './components/contact';
import Nav from "./components/Nav";
import Single_Product from "./components/single-product";
import Admin from "./components/admin/Admin";
import Profile from "./components/admin/ProfileSettings";
import Login from "./components/admin/Login";

function App() {
  return (
    <Router>
      <div className="cv-main-wrapper">
        <Nav />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/single-product" component={Single_Product} />
      </div>
      <Route path="/admin" exact>
        {localStorage.getItem("isAuth") ? <Admin /> : <Redirect to={{ pathname: "/login" }} />}
      </Route>
      <Route path="/admin/profile" exact>
        {localStorage.getItem("isAuth") ? <Profile /> : <Redirect to={{ pathname: "/login" }} />}
      </Route>
      <Route path="/login" exact>
        {localStorage.getItem("isAuth") ? <Redirect to={{ pathname: "/admin" }} /> : <Login />}
      </Route>
    </Router>
  );
}

export default App;
