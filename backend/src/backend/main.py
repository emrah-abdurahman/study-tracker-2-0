from fastapi import FastAPI

from .db import create_db_and_tables

app = FastAPI()


@app.get("/internet-entries")
def get_internet_entries():
    return {"internet_entry": "my_internet_entry"}


if __name__ == "__main__":
    create_db_and_tables()
