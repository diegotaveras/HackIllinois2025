from fastapi import FastAPI, HTTPException
import requests
import pprint

app = FastAPI()
API_KEY = "4136cd9fa253479aaeb846b336d6dd31"
BASE_URL = "https://api.spoonacular.com"

cached_recipes = {}

@app.get("/")
async def root():
    try:
        print("Fetching sample recipes = ITALIAN RECIPES UNDER 10 DOLLARS")
        budget = 1000.0
        cuisine = "italian"
        recipes = await get_recipes(budget, cuisine)
        return {"message": "Hello World", "recipes": recipes["results"]}
    except Exception as e:
        return {"error": str(e)}


@app.get("/recipes")
async def get_recipes(budget: float, cuisine: str):
    try: 
        print("Making request to API...")
        search_params = {
            "cuisine": cuisine,
            "number": 100,
            "apiKey": API_KEY
        }

        response = requests.get(f"{BASE_URL}/recipes/complexSearch", params=search_params)
        data = response.json()

        if "results" not in data:
            print('failed')
            raise HTTPException(status_code = 404, detail = "No Recipes Found")
        
        valid_recipes = []
        for recipe in data['results']:
            cost = 0.0
            if recipe['id'] in cached_recipes:
                cost = cached_recipes[recipe['id']]
            else:
                price_params = {
                    "apiKey": API_KEY
                }
                breakdown_response = requests.get(f"{BASE_URL}/recipes/{recipe['id']}/priceBreakdownWidget.json", params=price_params)
                breakdown_data = breakdown_response.json()

                cost = breakdown_data['totalCostPerServing'] / 100
                cached_recipes[recipe['id']] = cost
            if cost <= budget:
                valid_recipes.append({"id": recipe['id'], "recipeName": recipe['title'], "cost": cost})

            print(valid_recipes)

        return {"results": valid_recipes}
    except Exception as e:
        raise HTTPException(status_code = 500, detail = str(e))

