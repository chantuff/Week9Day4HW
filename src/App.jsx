import { useState } from 'react'
import Home from './components/Home'
// import Header from './components/Header'
import Stock from './components/Stock'
import stocks from './components/data.json'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'


function App() {
  const stocks = ({ stocks }) => {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/stocks/:symbol">
            <stocks stocks={stocks} />
          </Route>
          <Route path="/stocks">
            <Dashboard stocks={stocks} />
          </Route>
        </Switch>
      </Router>
    );
  };
  
}

export default App
