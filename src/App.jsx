import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';
import stocks from './components/data.json';

const App = () => {
  return (
    <Router>
    <NavBar />
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/stocks/:symbol" render={(props) => <Stock {...props} stocks={stocks} />} />
    <Route path="/stocks" render={() => <Dashboard stocks={stocks} />} />
  </Router>
  );
};

export default App;
