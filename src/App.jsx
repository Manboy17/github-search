import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import FavoritiesPage from "./pages/FavoritiesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorities" element={<FavoritiesPage />} />
      </Routes>
    </div>
  );
}

export default App;
