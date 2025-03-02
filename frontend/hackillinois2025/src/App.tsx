import {BrowserRouter,Routes, Route} from "react-router-dom";
import "./App.css";
import MenuBar from "./menu";
import Home from "./pages/Home"
import History from "./pages/history"
import Profile from "./pages/profile"


export default function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <MenuBar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/History" element={<History />} />
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );   
}