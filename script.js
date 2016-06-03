

function handleKeyDown(event) {
  var eventKey = event.which;
  switch (eventKey) {
    case 81: // "q" = 81 in keyCode
      $('.player1:last').after('<div class="player1">Go!<div>');
      // updateCounter("player1");
      winner();
      break;
    case 80: // "p" = 80 in keyCode 
      $('.player2:last').after('<div class="player2">Go!<div>');
      // updateCounter("player2");
      winner();
      break;
  }
}

var $addStep = $(document).one('keydown')
.on('keyup', function() {
    $(document).one('keydown', handleKeyDown(event));
})

function resetBoard() {
  alert("reset board?")
  $('.player1').slice(1, 11).remove();
  $('.player2').slice(1, 11).remove();
}

function winner() {
  if ($('.player1').length >= 11) {
    alert("Player 1 is the Winner!");
    resetBoard();
  }
  if ($('.player2').length >= 11) {
    alert("Player 2 is the Winner!");
    resetBoard();
  }
}