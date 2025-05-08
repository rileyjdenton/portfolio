from flask import Flask, g
from .app_factory import create_app
from .db_connect import close_db, get_db

app = create_app()
app.secret_key = 'your_secret_key_here'

from . import routes

@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = get_db()

@app.teardown_appcontext
def teardown_db(exception=None):
    """Close the database connection after each request."""
    close_db(exception)