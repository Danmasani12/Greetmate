import sys
import os
import pytest

# Add the backend directory to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..', 'backend')))

from app import app  # Keep the original import

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_greet(client):
    response = client.get('/api/greet')
    assert response.status_code == 200
    assert response.get_json() == {"message": "Hello from Flask!"}
