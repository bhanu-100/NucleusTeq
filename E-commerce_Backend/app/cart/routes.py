from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.cart import models, schemas
from app.auth.dependencies import get_current_user

router = APIRouter(prefix="/cart", tags=["User - Cart"])

# Add to Cart
@router.post("/", response_model=schemas.CartOut)
def add_to_cart(
    item: schemas.CartAdd,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    cart_item = db.query(models.CartItem).filter_by(
        user_id=user.id, product_id=item.product_id
    ).first()

    if cart_item:
        cart_item.quantity += item.quantity
    else:
        cart_item = models.CartItem(
            user_id=user.id,
            product_id=item.product_id,
            quantity=item.quantity
        )
        db.add(cart_item)

    db.commit()
    db.refresh(cart_item)
    return cart_item

# View Cart
@router.get("/", response_model=list[schemas.CartOut])
def view_cart(db: Session = Depends(get_db), user=Depends(get_current_user)):
    return db.query(models.CartItem).filter_by(user_id=user.id).all()

# Update Quantity
@router.put("/{product_id}", response_model=schemas.CartOut)
def update_quantity(
    product_id: int,
    item: schemas.CartAdd,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    cart_item = db.query(models.CartItem).filter_by(
        user_id=user.id, product_id=product_id
    ).first()

    if not cart_item:
        raise HTTPException(status_code=404, detail="Item not in cart")

    cart_item.quantity = item.quantity
    db.commit()
    db.refresh(cart_item)
    return cart_item

# Remove from Cart
@router.delete("/{product_id}")
def remove_from_cart(product_id: int, db: Session = Depends(get_db), user=Depends(get_current_user)):
    cart_item = db.query(models.CartItem).filter_by(
        user_id=user.id, product_id=product_id
    ).first()

    if not cart_item:
        raise HTTPException(status_code=404, detail="Item not in cart")

    db.delete(cart_item)
    db.commit()
    return {"message": "Item removed from cart"}
