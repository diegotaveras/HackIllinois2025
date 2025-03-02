import { useEffect, useState } from "react";
import NavBar from "../navbar";
import { Recipetype } from "../types";
import {RecipeList} from "../recipe";

export default function Home() {
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
        <div style={{padding: 70}}></div>
        <div className="flex flex-col items-center">
          <div className="pb-8"><NavBar onSearch={search}></NavBar></div>
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
  );
}