$(document).ready(function() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let result = '';
    suits.forEach((word) => {
        ranks.forEach((number) => {
        result += word + "of" + number + '<br>';
        });
    
        $("#deck").html(result);
    });
});
