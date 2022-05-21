FROM python:3.8

RUN apt-get update -y && apt-get install -y --no-install-recommends build-essential gcc libsndfile1

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

CMD [ "python", "app.py" ]
