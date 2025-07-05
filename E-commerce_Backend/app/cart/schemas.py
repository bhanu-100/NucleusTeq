from pydantic import BaseModel, Field

class CartAdd(BaseModel):
    product_id: int = Field(..., gt=0, description="ID of the product to add to cart")
    quantity: int = Field(..., ge=1, description="Quantity must be at least 1")

class CartOut(BaseModel):
    id: int
    product_id: int
    quantity: int

    class Config:
        from_attributes = True  # Replaces orm_mode in Pydantic v2
