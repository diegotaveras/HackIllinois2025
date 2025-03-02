from fastapi import FastAPI, HTTPException, APIRouter
import requests
import pprint


router = APIRouter()


API_KEY = "6a24f7df04754a29a97910bd73b076a2"
BASE_URL = "https://api.spoonacular.com"

cached_recipes = {}


@router.get("/")
async def root():
    try:
        
        return {"message": "Hello World"}
    except Exception as e:
        return {"error": str(e)}


@router.get("/recipes")
# async def get_recipes(budget: float, cuisine: str):
#     return {"results": MOCK_COMPLEX_SEARCH['results']}
    

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
            raise HTTPException(status_code = 404, detail = "No Recipes Found")
        
        valid_recipes = []
        for recipe in data['results']:
            cost = 0.0
            ingredients = ""
            if recipe['id'] in cached_recipes:
                cost = cached_recipes[recipe['id']]['cost']
                ingredients = cached_recipes[recipe['id']]['ingredients']
            else:
                price_params = {
                    "apiKey": API_KEY
                }
                breakdown_response = requests.get(f"{BASE_URL}/recipes/{recipe['id']}/priceBreakdownWidget.json", params=price_params)
                breakdown_data = breakdown_response.json()

                cost = breakdown_data['totalCostPerServing'] / 100
               
                ingredients_list = [ingredient["name"] for ingredient in breakdown_data.get("ingredients", [])]
                ingredients = ", ".join(ingredients_list)
                cached_recipes[recipe['id']] = {'cost': cost, 'ingredients': ingredients}


            if cost <= budget:
                valid_recipes.append({"id": recipe['id'], "title": recipe['title'], "cost": cost, "ingredients": ingredients})

            print(valid_recipes)

        return {"results": valid_recipes}
    except Exception as e:
        raise HTTPException(status_code = 500, detail = str(e))

