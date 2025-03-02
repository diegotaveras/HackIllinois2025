import {BrowserRouter,Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import MenuBar from "./menu";
import Home from "./pages/Home"
import History from "./pages/history"
import Profile from "./pages/profile"
import { Recipetype } from "./types";
import {RecipeList} from "./recipe";


export default function App() {
  const [searchResults, setSearchResults] = useState<Recipetype[]>([])

  useEffect(() => {
    console.log(searchResults); // Access the updated value here
  }, [searchResults]);

  const search = async(cuisine: string, budget: number) => {
    try {
      const response = await fetch(`http://localhost:8000/recipes?budget=${budget}&cuisine=${cuisine}`)
      const data = await response.json()
      const results: Recipetype[] = data.results
      if (results.length > 0) {
        setSearchResults(results)
      } 
    } catch(error) {
      console.log("Error:", error)
    }
  }



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