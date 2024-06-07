import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicial from "./pages/inicial";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Inicial/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
