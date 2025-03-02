from fastapi import HTTPException, APIRouter
import sqlite3
from pydantic import BaseModel, typing

router = APIRouter()

# configuration = sp.Configuration(
#     host = "https://api.spoonacular.com"
# )

class Recipe(BaseModel):
    recipeId: int
    ingredientList: str
    timestamp: str
    costOfRecipe: float
    recipeName: str


conn = sqlite3.connect("database.db")
cursor = conn.cursor()

DB_PATH = "database.db"  # Path to your SQLite file (can be any database)

# POST /history - Log a new recipe view for a user
@router.post("/history")
async def create_history_item(recipe: Recipe):
    
    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "INSERT INTO history (recipeId, nameOfRecipe, ingredients, costPerServing, timestamp) VALUES (?, ?, ?, ?, ?)",
                (recipe.recipeId, recipe.recipeName, recipe.ingredientList, recipe.costOfRecipe, recipe.timestamp)
            )
            conn.commit()
        return {"message": "History item created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")


# GET /history/{user_id} - Fetch the latest 15 recipes viewed by the user
@router.get("/history")
async def get_user_history():
    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT recipeId, nameOfRecipe, timestamp, costPerServing FROM history ORDER BY timestamp DESC LIMIT 15",
                ()
            )
            rows = cursor.fetchall()

        # Convert to list of dicts
        history = [{"recipeId": row[0], "name": row[1], "timestamp": row[2], "cost": row[3]} for row in rows]
        return {"history": history}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {e}")





