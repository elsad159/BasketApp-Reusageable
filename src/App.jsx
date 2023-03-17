import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="loginside" element={<Login />} />
        <Route path="registerside" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
