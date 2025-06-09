from pydantic import BaseModel

class CartAdd(BaseModel):
    product_id: int
    quantity: int

class CartOut(BaseModel):
    id: int
    product_id: int
    quantity: int

    class Config:
        orm_mode = True
