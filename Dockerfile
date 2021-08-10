FROM python:3.9-slim-buster

WORKDIR /code

RUN python3.9 -m venv venv
RUN . venv/bin/activate
RUN pip install django django-environ
# RUN pip3 install pyscopg2 
# RUN pip3 install pyscopg2-binary

# Install dependencies:
COPY . .
# RUN pip install -r requirements.txt
RUN python manage.py makemigrations
RUN python manage.py migrate