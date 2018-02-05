'use strict';

let friends = [
		{
			"name":"Ahmed",
			"photo":"https://static.pexels.com/photos/10517/pexels-photo-10517.jpeg",
			"scores":[5,1,4,4,5,1,2,5,4,1]
		},
		{
			"name":"Rob",
			"photo":"https://static.pexels.com/photos/10517/pexels-photo-10517.jpeg",
			"scores":[2,3,1,4,5,3,2,4,3,2]
		}, 
		{
			"name":"John",
			"photo":"https://static.pexels.com/photos/10517/pexels-photo-10517.jpeg",
			"scores":[5,2,4,3,4,5,1,3,2,5]
		}
];

module.exports = {
	getFriends: () => friends,
	addFriend: (friend) => friends.push(friend)
}