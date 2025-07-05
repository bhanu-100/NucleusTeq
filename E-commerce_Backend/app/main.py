from fastapi import FastAPI
from app.core.database import engine, Base
from app.auth import routes as auth_routes
from app.products import routes as product_routes
from app.public import routes as public_routes
from app.cart import routes as cart_routes
from app.orders import routes as order_routes
from app.checkout import routes as checkout_routes

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth_routes.router)
app.include_router(product_routes.router)
app.include_router(public_routes.router)
app.include_router(cart_routes.router)
app.include_router(order_routes.router)
app.include_router(checkout_routes.router)

@app.get("/")
def root():
    return {"message": "Welcome to the E-Commerce API!"}
