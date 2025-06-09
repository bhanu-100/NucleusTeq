from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.auth.dependencies import get_current_user
from app.core.database import get_db
from app.orders import models, schemas

router = APIRouter(prefix="/orders", tags=["Orders"])

@router.get("/", response_model=list[schemas.OrderOut])
def get_order_history(db: Session = Depends(get_db), user=Depends(get_current_user)):
    orders = db.query(models.Order).filter_by(user_id=user.id).all()
    return orders

@router.get("/{order_id}", response_model=schemas.OrderOut)
def get_order_details(order_id: int, db: Session = Depends(get_db), user=Depends(get_current_user)):
    order = db.query(models.Order).filter_by(id=order_id, user_id=user.id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order
