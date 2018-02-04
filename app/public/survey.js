document.getElementById('survey-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let data = $('#survey-form').serializeArray();
    
    let newFriend = {
        name: data[0].value,
        photo: data[1].value,
        scores: data.filter(value => value.name === "question").map(question => parseInt(question.value))
    }

    $.ajax({
        type: 'POST',
        url: '/api/friends',
        data: newFriend,
        success: function(res) {
            console.log(res);
        },
        error: function(err) {
            throw err;
        }
    });
});