from fastapi import APIRouter, Query, HTTPException, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.products.models import Product
from app.products.schemas import ProductOut

router = APIRouter(prefix="/products", tags=["Public - Products"])

# GET /products - Browse with filters
@router.get("/", response_model=list[ProductOut])
def list_products(
    db: Session = Depends(get_db),
    category: str | None = None,
    min_price: float | None = None,
    max_price: float | None = None,
    sort_by: str | None = Query(None, regex="^(price|name)$"),
    page: int = 1,
    page_size: int = 10,
):
    query = db.query(Product)

    if category:
        query = query.filter(Product.category == category)
    if min_price:
        query = query.filter(Product.price >= min_price)
    if max_price:
        query = query.filter(Product.price <= max_price)

    if sort_by == "price":
        query = query.order_by(Product.price)
    elif sort_by == "name":
        query = query.order_by(Product.name)

    products = query.offset((page - 1) * page_size).limit(page_size).all()
    return products


# GET /products/search - Search by keyword
@router.get("/search", response_model=list[ProductOut])
def search_products(keyword: str, db: Session = Depends(get_db)):
    results = db.query(Product).filter(Product.name.ilike(f"%{keyword}%")).all()
    return results


# GET /products/{id} - Product detail
@router.get("/{product_id}", response_model=ProductOut)
def get_product_detail(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
