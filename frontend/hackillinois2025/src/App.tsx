import { Routes, Route } from "react-router-dom";
import MenubarDemo from "./Menu";
import Home from "./pages/Home";
import History from "./pages/History";

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




