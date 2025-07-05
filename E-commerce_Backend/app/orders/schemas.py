from pydantic import BaseModel, Field
from typing import List
from datetime import datetime

class OrderItemOut(BaseModel):
    product_id: int = Field(..., description="ID of the purchased product")
    quantity: int = Field(..., ge=1, description="Quantity of product purchased")
    price_at_purchase: float = Field(..., gt=0, description="Price at the time of purchase")

    class Config:
        from_attributes = True

class OrderOut(BaseModel):
    id: int
    total_amount: float = Field(..., gt=0, description="Total amount paid for the order")
    status: str = Field(..., description="Order status: pending, paid, or cancelled")
    created_at: datetime
    items: List[OrderItemOut] = Field(..., description="List of products in this order")

    class Config:
        from_attributes = True
