async function fetchGreeting() {
    const response = await fetch('http://localhost:5000/api/greet');
    const data = await response.json();
    document.getElementById('greeting').textContent = data.message;
  }
  