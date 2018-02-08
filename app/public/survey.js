document.getElementById('survey-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let data = $('#survey-form').serializeArray();
    $('#survey-form')[0].reset();
    let newFriend = {
        name: data[0].value,
        photo: data[1].value,
        scores: data.filter(value => value.name === "question").map(question => parseInt(question.value))
    }

    $.ajax({
        type: 'POST',
        url: '/api/friends',
        data: JSON.stringify(newFriend),
        contentType: 'application/json',
        success: function(res) {
            $('#match-modal .modal-title').html(res.name);
            $('#match-modal #match-image').attr('src', res.photo);
            $('#match-modal').modal();
        },
        error: function(err) {
            throw err;
        }
    });
});