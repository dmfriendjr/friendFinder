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
    res.json(result);
});

function findCompatibleFriend(userData) {

    let bestMatch;
    let bestScore = Infinity;

    fakeData.forEach(friend => {
        let score = friend.scores.reduce((total, current, index) => total + Math.abs(current - userData.scores[index]) , 0)


        if (score < bestScore) {
            bestScore = score;
            bestMatch = friend;
        }
    })
    console.log(`Best Score: ${bestScore}`) 
    return bestMatch;
}



module.exports = router;