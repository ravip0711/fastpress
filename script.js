

function handleKeyDown(event) {
  var eventKey = event.which;
  switch (eventKey) {
    // "q" = 81 in keyCode
    case 81:
      $('.player1:last').after('<div class="player1">Go!<div>');
      break;
    // "p" = 80 in keyCode 
    case 80:
      $('.player2:last').after('<div class="player2">Go!<div>');
      break;  
  }
}


var $addStep = $(document).one('keydown', handleKeyDown)
.on('keyup', function() {
    $(document).one('keydown', handleKeyDown(event));
})