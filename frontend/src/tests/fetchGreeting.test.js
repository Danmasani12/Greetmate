/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import fetchGreeting from '../fetchGreeting';

test('fetchGreeting function', async () => {
    // Mocking the fetch function
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ message: "Hello from Flask!" })
        })
    );

    // Setting up a simple HTML structure for the test
    document.body.innerHTML = '<p id="greeting"></p>';

    // Run the fetchGreeting function
    await fetchGreeting();

    // Assert that the content of the element with id 'greeting' matches the expected text
    expect(document.getElementById('greeting').textContent).toBe("Hello from Flask!");

    // Clean up the mock
    global.fetch.mockClear();
    delete global.fetch;
});
