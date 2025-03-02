import { Recipetype, RecipeListType } from "./types";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import userIcon from "./assets/user-icon.png"



const Recipe = ({id, cost, title, ingredients, imageUrl}: Recipetype) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [interested, setInterested] = useState<boolean> (false);

    const handleAddMeal = async() => {
      if (selectedDate == null) {
        return
      }
      try {
        const response = await fetch(`http://127.0.0.1:8000/history`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ "recipeId": id,"timestamp":selectedDate.toISOString().split("T")[0],"recipeName": title ,"costOfRecipe": cost.toFixed(2), "ingredientList":ingredients , "recipeImage": imageUrl})

        })
        const data = await response.json()
        const result = data.message
        console.log(result)
      } catch(error) {
        console.log("Error:", error)
      }
    }
    // console.log(imageURL)

    return (
        <div className="border p-4 rounded-lg shadow-lg">
          <p className="flex justify-center"><img src={imageUrl} alt="Meal image" width={"200px"} height={"250px"}></img></p>
          <h3 className="text-lg font-bold text-center">{title}</h3>
          <p className="text-center">Cost: ${cost.toFixed(2)}</p>
          <button
        className={`mt-2 px-4 py-2 rounded-lg border w-full text-black`}
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
            className="mt-2 bg-blue-500 px-4 py-2 rounded-lg border border-white w-full"
            onClick={handleAddMeal}
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
            cost={recipe.cost}
            ingredients={recipe.ingredients} 
            imageUrl={recipe.imageUrl}/>
          ))}
        </div>
      );
}
    
export {Recipe, RecipeList};
