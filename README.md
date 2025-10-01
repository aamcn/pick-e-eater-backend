# Pick-e-Eater backend 🎮

The backend to the 'Pick-e-Eater' app.

# Features

GET meal data:
All meals, meal by mealId, Meal by type, subType or difficulty.
POST meal data:
Add new meal.

GET Diner data:
All Diners, Diner by name.
POST diner data:
Add meal to disliked meals.

# Prerequisites

Before running this project, make sure you have:
Node.js (v14 or higher)
postgres

# Installation

npm or yarn package manager

    Clone the repository
        git clone https://github.com/aamcn/pick-e-eater-backend
        cd pick-e-eater-backend

    Install dependencies
        npm install

    Create and host database (this app is designed to use postgres)

    Add environment variable to .env file.
        This is your 'connection string' or 'database url'
        Example:

        DATABASE_URL=postgresql://username:password@localhost:5432/database_name

    Edit and run populateDb.js
        Script builds the database and tables and inserts scripted data to each table.

    To run the app in development.
        Update port to 3000 (or desired port)
        npm run dev

    The app will run at http://localhost:3000

# API Endpoints

    Meal endpoints:

    Get All Meals
        GET /meals
        Description: Retrieve all meals from 'meals' table
        Response: Array of 'meals' (objects)
        Example response:
            [
                {
                    "id": 1,
                    "name": "Pizza",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Easy"
                },
                {
                    "id": 2,
                    "name": "Pasta",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Medium"
                }
            ]

    Get meal by id
        GET /meals/by-id
        Parameters:
            mealId (query): Integer ID of the meal
        Description: Retrieve meal with matching mealId
        Response: meal (object)
        Example response:
           {
                "id": 2,
                "name": "Pasta",
                "type": "Italian",
                "subType": "Main",
                "difficulty": "Medium"
           }

    Get meals by type
        GET /meals/by-type
        Parameters:
            mealType (query): String mealType of meals
        Description: Retrieve meals with matching mealType
        Response: Array of meals (object)
        Example response:
         [
                {
                    "id": 1,
                    "name": "Pizza",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Easy"
                },
                {
                    "id": 2,
                    "name": "Pasta",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Medium"
                }
            ]

    Get meals by sub type
        GET /meals/by-subtype
        Parameters:
            mealSubType (query): String mealSubType of meals
        Description: Retrieve meal with matching mealSubType
        Response: Array of meals (object)
        Example response:
         [
                {
                    "id": 1,
                    "name": "Pizza",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Easy"
                },
                {
                    "id": 2,
                    "name": "Pasta",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Medium"
                }
            ]

    Get meals by difficulty
        GET /meals/by-difficulty
        Parameters:
            mealDifficulty (query): string mealDifficulty of meals
        Description: Retrieve meals with matching mealDifficulty
        Response: Array of meals (object)
        Example response:
         [
                {
                    "id": 1,
                    "name": "Pizza",
                    "type": "Italian",
                    "subType": "Main",
                    "difficulty": "Easy"
                }
            ]

    Post new meal to database
        POST /meals/add-new-meal
        Description: Add a new meal to the meals table
        Body:
            formData: {
                name: "string (1-50 characters)"
                type:  "string (1-50 characters)"
                subType: "string (1-50 characters)"
                difficulty:  "string (1-50 characters)"
            }
        Response: "Added"


    Diner Endpoints.

     Get All Diners
        GET /diners
        Description: Retrieve all diners from 'diners' table
        Response: Array of 'diners' (objects)
        Example response: [
                {
                    "id": 1,
                    "name": "Tony",
                    "dislikes": [3,4,5]
                },
                {
                    "id": 2,
                    "name": "Bobby",
                    "dislikes": [1,4]
                }
            ]

    Get Diner by Name
        GET /diners/by-name
        Description: Retrieve diner by their name
        Body:
            formData: {
                name: "string (1-50 characters)"
            }
        Response: diner (object)
        Example response:
            {
                "id": 2,
                "name": "Bobby",
                "dislikes": [1,4]
            }


    Post Meal to Diner Dislikes
        POST /diners/add-meals-to-dislikes
        Description: Add meals to dislikes.
        Body:
            formData: {
                dinerId: Integer dinerId of the diner,
                mealIdArray: Array containing mealId's of meals
            }
        Response: "Done"

# Development

Code Quality Tools
ESLint: Code linting and style enforcement
Prettier: Code formatting

Running with Development Tools

# Run ESLint

npx eslint .

# Format code with Prettier

npx prettier --write .

# Frontend integration

This backend is designed to work with the pick-e-eater-frontend application. The frontend makes requests to these endpoints to:

Get data from database tables.
Post data to database tables.

# Author

Aaron McNulty
Link: https://github.com/aamcn/pick-e-eater-backend
GitHub: @aamcn
