from ariadne import load_schema_from_path, gql, make_executable_schema, ObjectType
from pathlib import Path
from users.models import User

BASE_DIR = Path(__file__).resolve().parent

schema_file = load_schema_from_path(BASE_DIR / "schema.graphql")
type_defs = gql(schema_file)

query = ObjectType("Query")

@query.field("getClients")
def resolve_clients(obj, info):
  return User.objects.all()

schema = make_executable_schema(type_defs, query)
