import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
