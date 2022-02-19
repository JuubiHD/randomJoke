$(document).ready(function() {
    console.log( 'ready!' );

    $('#grabJoke').on('click',function(){
        getRandomJoke();
    })


    // Create a request variable and assign a new XMLHttpRequest object to it.
    function getRandomJoke() {
        $.ajax({
            type: 'GET',
            url: 'https://geek-jokes.sameerkumar.website/api?format=json',
            success: function(data) {
                $('#showJoke').text(data.joke)
            }
        });
    }
});