import '@testing-library/jest-dom';
import fetchGreeting from '../fetchGreeting';


test('fetchGreeting function', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ message: "Hello from Flask!" })
        })
    );

    document.body.innerHTML = '<p id="greeting"></p>';

    await fetchGreeting();

    expect(document.getElementById('greeting').textContent).toBe("Hello from Flask!");

    global.fetch.mockClear();
    delete global.fetch;
});
