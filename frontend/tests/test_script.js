// Import jest-dom for better DOM assertions
import '@testing-library/jest-dom';

test('fetchGreeting function', async () => {
    // Mock the fetch function globally
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Hello from Flask!" })
      })
    );

    // Set up the DOM element that fetchGreeting will modify
    document.body.innerHTML = '<p id="greeting"></p>';

    // Call the function you're testing
    await fetchGreeting();

    // Assert that the text content of the element is updated as expected
    expect(document.getElementById('greeting').textContent).toBe("Hello from Flask!");

    // Clean up mock
    global.fetch.mockClear();
    delete global.fetch;
});
