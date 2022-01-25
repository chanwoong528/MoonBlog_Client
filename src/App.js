import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Main from "./pages/Main";
import PostMain from "./pages/PostMain";
import AdminMain from "./pages/AdminMain";
import LoginMain from "./pages/LoginMain";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<PostMain />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/auth" element={<LoginMain />} />
      </Routes>
    </>
  );
}

export default App;
