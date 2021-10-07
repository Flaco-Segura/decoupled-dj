from enum import Enum
import strawberry
import datetime
import decimal

from typing import List
from users.models import User as UserModel

@strawberry.enum
class InvoiceState(Enum):
  PAID = "PAID"
  UNPAID = "UNPAID"
  CANCELLED = "CANCELLED"

@strawberry.type
class User:
  id: strawberry.ID
  name: str
  email: str

@strawberry.type
class Invoice:
  user: User
  date: datetime.date
  due_date: datetime.date
  state: InvoiceState
  items: List["ItemLine"]

@strawberry.type
class ItemLine:
  quantity: int
  description: str
  price: decimal.Decimal
  taxed: bool

def resolve_clients():
  return UserModel.objects.all()

def resolve_client(id: strawberry.ID):
  return UserModel.objects.get(id=id)
