from datetime import datetime, timezone

from sqlmodel import Session, select

from .db import engine
from .models import InternetStudyEntry, StudyTaxonomy


def seed_database():
    with Session(engine) as session:
        if session.exec(select(StudyTaxonomy)).first():
            print("→ Database already contains data. Skipping seed phase.")
            return

        print("→ Populating local SQLite database with tracking records...")

        python_tax = StudyTaxonomy(
            domain="Software Engineering",
            category="Software Development",
            sub_category="Programming Languages",
            subject="Python",
        )

        sqlmodel_tax = StudyTaxonomy(
            domain="Software Engineering",
            category="Data Engineering",
            sub_category="Database/Productivity Tools",
            subject="SQLModel",
        )

        session.add(python_tax)
        session.add(sqlmodel_tax)
        session.flush()

        internet_study_entry_1 = InternetStudyEntry(
            hostname="www.freecodecamp.org",
            url="https://www.freecodecamp.org/learn/python-v9/lecture-understanding-abstraction/what-is-abstraction-and-how-does-it-help-keep-complex-systems-organized",
            title="Understanding Abstraction - What Is Abstraction and How Does It Help Keep Complex Systems Organized? | Learn | freeCodeCamp.org",
            status="In Progress",
            taxonomy_id=python_tax.id,
            total_minutes=45,
            date_started=datetime.now(timezone.utc),  # noqa: UP017
            date_last_done=datetime.now(timezone.utc),  # noqa: UP017
        )

        internet_study_entry_2 = InternetStudyEntry(
            hostname="sqlmodel.tiangolo.com",
            url="https://sqlmodel.tiangolo.com/tutorial/automatic-id-none-refresh/",
            title="Automatic IDs, None Defaults, and Refreshing Data - SQLModel",
            status="In Progress",
            taxonomy_id=sqlmodel_tax.id,
            total_minutes=30,
            date_started=datetime.now(timezone.utc),  # noqa: UP017
            date_last_done=datetime.now(timezone.utc),  # noqa: UP017
        )

        session.add(internet_study_entry_1)
        session.add(internet_study_entry_2)

        session.commit()
        print("✓ Database successfully seeded with 2 records.")

if __name__ == "__main__":
    seed_database()