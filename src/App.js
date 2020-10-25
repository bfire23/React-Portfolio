import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar"
import About from "./pages/About";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} /> 
          {/* <Route exact path="/contact" component={Contact} />  */}
        </Wrapper>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
