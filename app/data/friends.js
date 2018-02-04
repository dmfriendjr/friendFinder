let friends = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[5,1,4,4,5,1,2,5,4,1]
    },
    {
        "name":"Rob",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[2,3,1,4,5,3,2,4,3,2]
    }, 
    {
        "name":"John",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[5,2,4,3,4,5,1,3,2,5]
    }
];

module.exports = {
    getFriends: () => friends,
    addFriend: (friend) => friends.push(friend)
}