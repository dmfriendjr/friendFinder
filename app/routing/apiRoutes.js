"use strict";

const express = require('express'),
    router = express.Router(),
    friends = require('../data/friends');

router.get('/friends', (req, res) => {
    res.json(friends.getFriends());
});

router.post('/friends', (req, res) => {
    let result = findCompatibleFriend(req.body);
    friends.addFriend(req.body);
    console.log(result);
    res.json(result);
});

function findCompatibleFriend(userData) {
    let bestMatch;
    let bestScore = Infinity;

    friends.getFriends().forEach(friend => {
        let score = friend.scores.reduce((total, current, index) => total + Math.abs(current - userData.scores[index]), 0)

        if (score < bestScore) {
            bestScore = score;
            bestMatch = friend;
        }
    })

    return bestMatch;
}

module.exports = router;