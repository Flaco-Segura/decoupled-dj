FROM python:3.9-slim-buster

WORKDIR /code

RUN python3 -m venv /venv
RUN python3 -m pip install --upgrade pip

# Install dependencies:
COPY . .
RUN . /venv/bin/activate && pip install -r requirements.txt
