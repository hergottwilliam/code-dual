const express = require("express");

const router = express.Router();

let activeRoomTokens = [];

router.post('/generate-room-token', (req, res) => {

    const roomToken = generateRandomToken();

    res.json({ roomToken });

    // TODO: Implement logic for checking number of current rooms and limiting creations
});

function generateRandomToken() {
    const tokenLength = 32;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let token = '';

    for (let i = 0; i < tokenLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        const randomChar = chars[randomIndex];

        token += randomChar;
    }

    activeRoomTokens.push(token);

    return token;
}

// TODO: terminate room function

console.log("Listening on port 8080");

module.exports = router;