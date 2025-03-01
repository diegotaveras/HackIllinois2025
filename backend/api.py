from fastapi import FastAPI, HTTPException
import requests
import pprint

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend on Vite's default port (5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Add your frontend's port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "c64dfa783b98476a8626cdd29865082f"
BASE_URL = "https://api.spoonacular.com"

cached_recipes = {}

MOCK_COMPLEX_SEARCH = {
    "results": [
        {
            "id": 1234,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "cost": 10
        },
        {
            "id": 5678,
            "title": "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
            "cost": 10
        }
    ],
}

MOCK_PRICES_BREAKDOWN = {
    "ingredients": [
        {
            "amount": {
                "metric": {
                    "unit": "g",
                    "value": 222.0
                },
                "us": {
                    "unit": "cups",
                    "value": 1.5
                }
            },
            "name": "blueberries",
            "price": 174.43
        },
        {
            "amount": {
                "metric": {
                    "unit": "",
                    "value": 1.0
                },
                "us": {
                    "unit": "",
                    "value": 1.0
                }
            },
            "name": "egg white",
            "price": 18.21
        }
    ],
    "totalCost": 1500,
    "totalCostPerServing": 750
}

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
                valid_recipes.append({"id": recipe['id'], "title": recipe['title'], "cost": cost})

            print(valid_recipes)

        return {"results": valid_recipes}
    except Exception as e:
        raise HTTPException(status_code = 500, detail = str(e))

