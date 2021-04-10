import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import Navigation from "./components/Nav"
import Wrapper from "./components/Wrapper"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
// import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Wrapper>
      <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Skills" component={Skills} />       
        </Switch>
        </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
