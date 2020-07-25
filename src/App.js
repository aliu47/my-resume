import React from 'react';
import './tailwind.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Views/Home';
import About from './Views/About';
import Projects from './Views/Projects';

function App() {
  return (
    <div className="relative pb-10 min-h-screen text-gray-100 ">
      <Router>
        <Header />

        <Switch>
          <Route  path="/">
            <Home />
          </Route>

          <Route path="/my-resume/about">
            <About />
          </Route>

          <Route path="/my-resume/projects">
            <Projects />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
