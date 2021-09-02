from .base import * # noqa

SECURE_SSL_REDIRECT = True
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
STATIC_ROOT = env("STATIC_ROOT")
