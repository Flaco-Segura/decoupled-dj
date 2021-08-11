FROM python:3.9-slim-buster

WORKDIR /code

# Phython environment && Django settings
RUN python3.9 -m venv venv
RUN . venv/bin/activate
RUN export DJANGO_SETTINGS_MODULE=decoupled_dj.settings.development

# Install dependencies:
COPY . .
RUN pip install -r requirements/development.txt

# Make migrations
RUN python manage.py makemigrations
RUN python manage.py migrate