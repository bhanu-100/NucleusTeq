from pydantic import BaseModel

class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    stock: int
    category: str
    image_url: str

class ProductCreate(ProductBase):
    pass

class ProductUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    stock: int | None = None
    category: str | None = None
    image_url: str | None = None

class ProductOut(ProductBase):
    id: int

    class Config:
        orm_mode = True
