import { Routes, Route } from "react-router-dom";
import MenubarDemo from "./Menu";
import Home from "./pages/Home";
import History from "./pages/History";

export default function App() {
  return (
    <div>
      <MenubarDemo />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}
