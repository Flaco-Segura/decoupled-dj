from enum import Enum
import strawberry
import datetime
import decimal

from typing import List

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
