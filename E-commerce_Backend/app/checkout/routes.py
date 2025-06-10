from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.auth.dependencies import get_current_user
from app.cart import models as cart_models
from app.orders import models as order_models
from app.products import models as product_models

router = APIRouter(prefix="/checkout", tags=["Checkout"])

@router.post("/")
def checkout(db: Session = Depends(get_db), user=Depends(get_current_user)):
    cart_items = db.query(cart_models.CartItem).filter_by(user_id=user.id).all()
    if not cart_items:
        raise HTTPException(status_code=400, detail="Cart is empty")

    total_amount = 0
    for item in cart_items:
        product = db.query(product_models.Product).filter_by(id=item.product_id).first()
        if not product:
            raise HTTPException(status_code=404, detail=f"Product with ID {item.product_id} not found")
        total_amount += item.quantity * product.price

    new_order = order_models.Order(user_id=user.id, total_amount=total_amount, status="paid")
    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    for item in cart_items:
        product = db.query(product_models.Product).filter_by(id=item.product_id).first()

        product.stock -= item.quantity
        if product.stock < 0:
            product.stock = 0
            
        order_item = order_models.OrderItem(
            order_id=new_order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price_at_purchase=product.price
        )
        db.add(order_item)


    db.query(cart_models.CartItem).filter_by(user_id=user.id).delete()
    db.commit()
    return {"message": "Order placed successfully", "order_id": new_order.id}
