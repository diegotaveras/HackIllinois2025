from fastapi import FastAPI, HTTPException, APIRouter
import requests
import pprint

from fastapi.middleware.cors import CORSMiddleware

router = APIRouter()

API_KEY = "623b79bdcbef41e8bca6bbc790ab7020"
BASE_URL = "https://api.spoonacular.com"

# Cache now stores a dictionary with both cost and ingredients for each recipe ID.
cached_recipes = {}

@router.get("/")
async def root():
    try:
        return {"message": "Hello World"}
    except Exception as e:
        return {"error": str(e)}

@router.get("/recipes")
async def get_recipes(budget: float, cuisine: str):
    try: 
        print("Making request to API...")
        search_params = {
            "cuisine": cuisine,
            "number": 3,
            "apiKey": API_KEY
        }

        response = requests.get(f"{BASE_URL}/recipes/complexSearch", params=search_params)
        data = response.json()

        if "results" not in data:
            print('failed')
            raise HTTPException(status_code=404, detail="No Recipes Found")
        
        valid_recipes = []
        for recipe in data['results']:
            cost = 0.0
            ingredients = ""
            recipeBreakdown = ""
            if recipe['id'] in cached_recipes:
                # Retrieve both cost and ingredients from the cache
                cached_data = cached_recipes[recipe['id']]
                cost = cached_data["cost"]
                ingredients = cached_data["ingredients"]
                recipeBreakdown = cached_data["recipeBreakdown"]
            else:
                price_params = {
                    "apiKey": API_KEY
                }
                breakdown_response = requests.get(
                    f"{BASE_URL}/recipes/{recipe['id']}/priceBreakdownWidget.json", 
                    params=price_params
                )
                breakdown_data = breakdown_response.json()

                cost = breakdown_data['totalCostPerServing'] / 100
                ingredients_list = [ingredient["name"] for ingredient in breakdown_data.get("ingredients", [])]
                price_breakdown_list = [ingredient["name"] + ": $" + str(round(ingredient["price"] / 100,2)) for ingredient in breakdown_data.get("ingredients", [])]
                ingredients = ", ".join(ingredients_list)
                recipeBreakdown = ",".join(price_breakdown_list)
                cached_recipes[recipe['id']] = {"cost": cost, "ingredients": ingredients, "recipeBreakdown": recipeBreakdown}

            if cost <= budget:
                # Append the valid recipe to the list
                valid_recipes.append({
                    "id": recipe['id'],
                    "title": recipe['title'],
                    "cost": cost,
                    "ingredients": ingredients,
                    "imageUrl": recipe['image'],
                    "recipeBreakdown": recipeBreakdown
                })

            print(valid_recipes)

        return {"results": valid_recipes}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    


