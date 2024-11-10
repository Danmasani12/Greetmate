async function fetchGreeting() {
    try {
        const response = await fetch('/api/greet'); 
        const data = await response.json();
        document.getElementById('greeting').textContent = data.message;
    } catch (error) {
        console.error("Error fetching greeting:", error);
    }
}

export default fetchGreeting;
