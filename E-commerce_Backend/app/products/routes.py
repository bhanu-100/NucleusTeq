from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.auth.dependencies import get_current_admin
from app.products import models, schemas

router = APIRouter(prefix="/admin/products", tags=["Admin - Products"])

# Create Product
@router.post("/", response_model=schemas.ProductOut)
def create_product(
    product: schemas.ProductCreate,
    db: Session = Depends(get_db),
    admin = Depends(get_current_admin)
):
    new_product = models.Product(**product.dict())
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

# Get All Products (with pagination)
@router.get("/", response_model=list[schemas.ProductOut])
def list_products(
    db: Session = Depends(get_db),
    admin = Depends(get_current_admin),
    skip: int = 0,
    limit: int = 10
):
    return db.query(models.Product).offset(skip).limit(limit).all()

# Get Single Product
@router.get("/{product_id}", response_model=schemas.ProductOut)
def get_product(
    product_id: int,
    db: Session = Depends(get_db),
    admin = Depends(get_current_admin)
):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# Update Product
@router.put("/{product_id}", response_model=schemas.ProductOut)
def update_product(
    product_id: int,
    updates: schemas.ProductUpdate,
    db: Session = Depends(get_db),
    admin = Depends(get_current_admin)
):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    for field, value in updates.dict(exclude_unset=True).items():
        setattr(product, field, value)

    db.commit()
    db.refresh(product)
    return product

# Delete Product
@router.delete("/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
    admin = Depends(get_current_admin)
):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()
    return {"message": "Product deleted successfully"}
