import { useEffect, useState } from "react";
import NavBar from "./navbar";
import "./App.css";
import { Recipetype } from "./types";
import {RecipeList} from "./recipe";
import MenuBar from "./menu";


export default function App() {
  const [searchResults, setSearchResults] = useState<Recipetype[]>([])

  useEffect(() => {
    console.log(searchResults); // Access the updated value here
  }, [searchResults]);

  const search = async(cuisine: string, budget: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/recipes?budget=${budget}&cuisine=${cuisine}`)
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
      <div>
        <div className="flex fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center">
          <MenuBar />
        </div>
        <div style={{padding: 70}}></div>
        <div className="flex flex-col items-center">
          <div><NavBar onSearch={search}></NavBar></div>
          <div>
              {searchResults.length === 0 ? (
                <p>No recipes found.</p>
              ) : (
                <RecipeList recipes={searchResults} />
              )}
          </div>
        </div>
      </div>
    </>

        //     <main>
    //   <BrowserRouter>
    //     <Navbar />
    //     <div className='min-h-screen w-full flex items-center justify-center'>
    //       <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='/about' element={<About />} />
    //         <Route path='/pricing' element={<Pricing />} />
    //         <Route path='/contact' element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </main>
    
  );
}
