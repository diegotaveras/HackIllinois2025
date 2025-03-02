from fastapi import FastAPI
from routes.history import router as history_router
from routes.recipe import router as recipe_router
from fastapi.middleware.cors import CORSMiddleware


# API_KEY = "c64dfa783b98476a8626cdd29865082f"

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Add your frontend's port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the history router
app.include_router(history_router)
app.include_router(recipe_router)






