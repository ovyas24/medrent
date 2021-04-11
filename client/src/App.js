import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';
import Shop from './components/Shop';
import About from './components/about';
import Contact from './components/contact';
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="cv-main-wrapper">
        <Nav />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/about" exact component={About} />
      <Route path="/service" exact component={Service} />
      <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
