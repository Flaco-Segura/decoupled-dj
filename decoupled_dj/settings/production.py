from decoupled_dj.settings.development import CORS_ALLOW_ALL_ORIGINS
from .base import * # noqa

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
SECURE_SSL_REDIRECT = True
CORS_ALLOW_ALL_ORIGINS = env.list(
  "CORS_ALLOWED_ORIGINS",
  default=[]
)
CSRF_COOKIE_SECURE = True
REST_FRAMEWORK = {
  **REST_FRAMEWORK,
  "DEFAULT_RENDERER_CLASSES": ["rest_framework.renderers.JSONrenderer"]
}
SESSION_COOKIE_SECURE = True
STATIC_ROOT = env("STATIC_ROOT")
