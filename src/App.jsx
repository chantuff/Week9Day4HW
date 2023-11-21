import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;