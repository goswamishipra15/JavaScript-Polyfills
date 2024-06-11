// Debounce Polyfill

const myDebounce = (callback, delay) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

// Example usage
const log = (message) => console.log(message);

const debouncedLog = myDebounce(log, 2000);

debouncedLog("Hello");
setTimeout(() => debouncedLog("World"), 1000);
setTimeout(() => debouncedLog("Again"), 3000);

// The first call to debouncedLog("Hello") will start a timer.
// The second call to debouncedLog("World") within 1 second will reset the timer.
// The third call to debouncedLog("Again") after 3 seconds will execute the log function since the previous timer will have expired.
