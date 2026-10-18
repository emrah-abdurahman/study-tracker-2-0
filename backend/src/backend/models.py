from datetime import datetime

from sqlmodel import Field, SQLModel


class StudyTaxonomy(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    domain: str
    category: str
    sub_category: str
    subject: str


class InternetStudyEntry(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    hostname: str
    url: str
    title: str
    status: str
    taxonomy_id: int = Field(foreign_key="studytaxonomy.id")
    total_minutes: int
    date_started: datetime
    date_last_done: datetime
