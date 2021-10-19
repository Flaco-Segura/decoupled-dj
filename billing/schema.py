from enum import Enum
import strawberry
import datetime
import decimal
import dataclasses

from typing import List

from strawberry import schema
from strawberry import mutation
from users.models import User as UserModel
from billing.models import Invoice as InvoiceModel
from billing.models import ItemLine as ItemLineModel

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

@strawberry.type
class Query:
  get_clients: List[User] = strawberry.field(resolver=resolve_clients)
  get_client: User = strawberry.field(resolver=resolve_client)

@strawberry.input
class ItemLineInput:
  quantity: int
  description: str
  price: decimal.Decimal
  taxed: bool

@strawberry.input
class InvoiceInput:
  user: strawberry.ID
  date: datetime.date
  due_date: datetime.date
  state: InvoiceState
  items: List[ItemLineInput]

@strawberry.type
class Mutation:
  @strawberry.mutation
  def create_invoice(self, invoice: InvoiceInput) -> Invoice:
    _invoice = dataclasses.asdict(invoice)
    user_id = _invoice.pop("user")
    items = _invoice.pop("items")
    state = _invoice.pop("state")

    new_invoice = InvoiceModel.objects.create(
      user_id=user_id, state=state.value, **_invoice
    )
    for item in items:
      ItemLineModel.objects.create(invoice=_invoice, **item)
    return new_invoice

schema = strawberry.Schema(query=Query, mutation=Mutation)
