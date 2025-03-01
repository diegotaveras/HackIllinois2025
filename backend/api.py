from fastapi import FastAPI
import spoonacular as sp
import pprint



app = FastAPI()



api = sp.API("4136cd9fa253479aaeb846b336d6dd31")

response = api.parse_ingredients("3.5 cups King Arthur flour", servings=1)
data = response.json()
print(data)