from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import mysql.connector
from typing import List

app = FastAPI()

# Allow CORS for your React app
origins = [
    "http://localhost:3003",  # Update with the URL of your frontend app if deployed elsewhere
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#house class
class Property(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image_url: str

#sql connection settings
def get_db_connection():
    try:
        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="parvonis4259",
            database="realestate_db",
        )
        return db
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=f"Database connection error: {err}")

@app.get("/properties/{property_id}", response_model=Property)
async def get_property(property_id: int):
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    
    try:
        cursor.execute("SELECT id, name, description, price, image_url FROM properties WHERE id = %s", (property_id,))
        property = cursor.fetchone()  # Fetch a single property by ID

        if property is None:
            raise HTTPException(status_code=404, detail="Property not found")
        
        return property
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=f"Database query error: {err}")
    finally:
        cursor.close()
        db.close()

@app.get("/api/property/{name}", response_model=Property)
async def get_property_by_name(name: str):
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    try:
        # Adjust query to handle case sensitivity and potential partial matches
        cursor.execute("SELECT id, name, description, price, image_url, location, property_type, bedrooms, bathrooms, square_feet, status, property_rating, youtube_tour_link FROM properties WHERE LOWER(name) = LOWER(%s)", (name,))
        property = cursor.fetchone()

        if property is None:
            raise HTTPException(status_code=404, detail="Property not found")

        return property
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=f"Database query error: {err}")
    finally:
        cursor.close()
        db.close()
