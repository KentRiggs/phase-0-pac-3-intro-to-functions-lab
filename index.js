// Define the shout function
function shout(string) {
    return string.toUpperCase();
}

// Define the whisper function
function whisper(string) {
    return string.toLowerCase();
}

// Define the logShout function
function logShout(string) {
    console.log(string.toUpperCase());
}

// Define the logWhisper function
function logWhisper(string) {
    console.log(string.toLowerCase());
}

// Define the sayHiToHeadphonedRoommate function
function sayHiToHeadphonedRoommate(string) {
    const shoutedString = shout(string);
    const whisperedString = whisper(string);

    if (string === whisperedString) {
        return "I can't hear you!";
    } else if (string === shoutedString) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}