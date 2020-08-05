import React from 'react';
import './tailwind.css';
import Header from './Components/Head/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Views/Home';
import Projects from './Views/Projects';
import Timeline from './Views/Timeline';

function App() {
  return (
    <div className="relative pb-10 min-h-screen max-w-screen font-serif">
      <Router>
      {/* <Header /> */}

        <Switch>
          <Route exact path="/resume">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/timeline">
            <Timeline/>
          </Route>
        </Switch>


        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
