from fastapi import FastAPI
from app.core.database import engine, Base
from app.auth import routes as auth_routes
from app.products import routes as product_routes

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth_routes.router)
app.include_router(product_routes.router)

@app.get("/")
def root():
    return {"message": "Welcome to the E-Commerce API!"}
