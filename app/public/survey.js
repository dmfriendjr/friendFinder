document.getElementById('survey-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log($('#survey-form').serializeArray());
});



console.log('Testing');