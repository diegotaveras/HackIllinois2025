import { useEffect, useState } from "react";
import NavBar from "./navbar";
import "./App.css";
// <<<<<<< alan
// import { Recipetype } from "./types";
// import {RecipeList} from "./recipe";


// export default function App() {
//   const [searchResults, setSearchResults] = useState<Recipetype[]>([])

//   useEffect(() => {
//     console.log(searchResults); // Access the updated value here
//   }, [searchResults]);

//   const search = async(cuisine: string, budget: number) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/recipes?budget=${budget}&cuisine=${cuisine}`)
//       const data = await response.json()
//       const results: Recipetype[] = data.results
//       if (results.length > 0) {
//         setSearchResults(results)
//       } 
//     } catch(error) {
//       console.log("Error:", error)
//     }
//   }



//   return (
//     <>
//       <div><NavBar onSearch={search}></NavBar></div>
//       <div>
//           {searchResults.length === 0 ? (
//             <p>No recipes found.</p>
//           ) : (
//             <RecipeList recipes={searchResults} />
//           )}
//       </div>
//     </>
    
// =======
// import MenubarDemo from "./Menu"
// import {InputField} from "./Input"
// import {ScrollAreaSection} from "./Scroll-area"
// import { Separator } from "./components/ui/separator"
// import History from "./pages/history";

// export default function App() {
//       <div>
//         <MenubarDemo />
//       </div>
//       <div className="container bg-blue-500 w-full h-27">
//         <h1>RecipeApp</h1>
//         <p>Budget your meals in college</p>
//       </div>
//       <div style={{ padding: '50px'}}>
//       </div>
//       <InputField />
//       <Separator className="my-2" />
//       <div>
//         <ScrollAreaSection />
//       </div>
//     </div>
// >>>>>>> main
  );
}
