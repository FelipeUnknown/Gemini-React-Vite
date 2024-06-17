import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicial from "./pages/inicial";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/" element={<Inicial/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
