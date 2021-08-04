FROM python:3.9-slim-buster

WORKDIR /code

RUN python3 -m venv /venv

# Install dependencies:
COPY . .
RUN . /venv/bin/activate && pip install -r requirements.txt

# Run the application:
# COPY myapp.py .
# CMD . /venv/bin/activate && exec python myapp.py
