from decoupled_dj.settings.development import CORS_ALLOW_ALL_ORIGINS
from .base import * # noqa

SECURE_SSL_REDIRECT = True
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
STATIC_ROOT = env("STATIC_ROOT")
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
CORS_ALLOW_ALL_ORIGINS = env.list(
  "CORS_ALLOWED_ORIGINS",
  default=[]
)
