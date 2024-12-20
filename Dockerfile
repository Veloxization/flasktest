FROM registry.access.redhat.com/ubi8/python-38
WORKDIR /
COPY . .

RUN pip install -r requirements.txt

EXPOSE 8080
CMD ["python", "app.py"]
