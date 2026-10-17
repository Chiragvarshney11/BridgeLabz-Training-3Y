// Question 5: Boolean Logic Access System
// Access is secure only when every required condition is met.

const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// The NOT operator checks that the door is not unlocked.
const isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside &&
    !(isDoorLocked === false);

console.log(`Door locked: ${isDoorLocked}`);
console.log(`Window closed: ${isWindowClosed}`);
console.log(`Alarm on: ${isAlarmOn}`);
console.log(`Owner inside: ${isOwnerInside}`);
console.log(`Security status: ${isSecure ? "Secure" : "Unsafe"}`);

// Try changing one or more values to test other outcomes.
