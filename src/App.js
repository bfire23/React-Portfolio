import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>

      </div>
    </Router>
  );
}

export default App;
