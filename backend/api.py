from fastapi import FastAPI
import spoonacular as sp
import pprint
import json

app = FastAPI()
api = sp.API("4136cd9fa253479aaeb846b336d6dd31")


@app.get("/recipes")
async def get_recipes(budget: float = 10.0, cuisine: str = ""):

    response = api.search_recipes_complex(cuisine )
    response_dict = json.load(response)

    filtered_response = filter(lambda x: x. <= budget, response_dict)
    # data = response.json()

    print(data)
    return data

@app.post("/history")
async def get_history():
    query = """SELECT User, """




