// Throttle Polyfill

const myThrottle = (callback, delay) => {
    let last = 0
    return (...args) => {
        let now = new Date().getTime();
        if (now - last < delay) return
        last = now
        return callback(...args)
    }
}

const logMessage = (message) => console.log(message);

const throttledLog = myThrottle(logMessage, 2000);

throttledLog("Hello"); // Should print "Hello"
setTimeout(() => throttledLog("World"), 1000); // Should not print "World" because it's within the 2 second window
setTimeout(() => throttledLog("Again"), 3000); // Should print "Again" because 3 seconds have passed

