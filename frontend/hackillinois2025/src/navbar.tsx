import { useState } from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

interface HeaderProps {
    onSearch: (cuisine: string, budget: number) => void;
  }
  
 const NavBar = ({ onSearch }: HeaderProps) => {
    const [cuisine, setCuisine] = useState<string>("italian");
    const [budget, setBudget] = useState<number>(10);
  
    const handleSearch = () => {
      onSearch(cuisine, budget);
    };

    return (
        <div className="flex flex-row">
            <label className="pr-5 pt-2">Select a cusine type:</label>
            <select className="p-2 bg-white text-black rounded-lg" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                <option value="african">African</option>
                <option value="asian">Asian</option>
                <option value="american">American</option>
                <option value="british">British</option>
                <option value="cajun">Cajun</option>
                <option value="caribbean">Caribbean</option>
                <option value="chinese">Chinese</option>
                <option value="eastern european">Eastern European</option>
                <option value="european">European</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="greek">Greek</option>
                <option value="indian">Indian</option>
                <option value="irish">Irish</option>
                <option value="italian">Italian</option>
                <option value="japanese">Japanese</option>
                <option value="jewish">Jewish</option>
                <option value="korean">Korean</option>
                <option value="latin american">Latin American</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="mexican">Mexican</option>
                <option value="middle eastern">Middle Eastern</option>
                <option value="nordic">Nordic</option>
                <option value="southern">Southern</option>
                <option value="spanish">Spanish</option>
                <option value="thai">Thai</option>
                <option value="vietnamese">Vietnamese</option>
            </select>
            <div className="flex flex-row">
                <label className="flex row pr-5 pl-10 pt-2">Enter your budget:</label>
                <input type="number" className="p-2 rounded-lg text-black" placeholder="Budget" value={budget} onChange={(e) => setBudget(Number(e.target.value))}/>
            </div>
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white" onClick={handleSearch}> Search </button>
        </div>
    )
}

export default NavBar;