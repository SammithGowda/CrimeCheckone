import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./Components/Register_page";
import { Login } from "./Components/Login_page";
import { NoticeBordPage } from "./Components/Notice_bord_page";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notice-bord-page/:type" element={<NoticeBordPage />} />
      </Routes>
    </>
  );
}

export default App;
