FROM python:3.7

WORKDIR /app

COPY requirements.txt .
RUN pip --no-cache-dir install -r ./requirements.txt

COPY src/ src/

CMD python src/job-creator.py