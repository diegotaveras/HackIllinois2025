import { Recipetype, RecipeListType } from "./types";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";



const Recipe = ({id, cost, title}: Recipetype) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [interested, setInterested] = useState<boolean> (false);
    return (
        <div className="border p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>Cost: ${cost}</p>
          
          <button
        className={`mt-2 px-4 py-2 rounded-lg border w-full text-white`}
        onClick={() => setInterested(!interested)}
      >
        {interested ? "Not Interested" : "Interested"}
      </button>
      {interested && (
        <div className="mt-4 bg-white p-2 rounded-lg">
          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
          />
          <button
            className="mt-2 bg-blue-500 px-4 py-2 rounded-lg border border-white w-full text-white"
          >
            Add to Meal Plan
          </button>
        </div>
      )}
        </div>
      );
};

const RecipeList = ({recipes}: RecipeListType) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Recipe key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            cost={recipe.cost} />
          ))}
        </div>
      );
}
    
export {Recipe, RecipeList};
