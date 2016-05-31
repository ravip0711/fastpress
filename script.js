// player1 keypress
// $(document).on('keydown', function() {

//   $('.player1:last').after('<div class="player1">Go!<div>');
// })

function handleKeyDown(event) {
  if ( event.which == 81) {
    $('.player1:last').after('<div class="player1">Go!<div>');
  };
}

var $keyPressedAction = $(document).one('keydown', handleKeyDown)
.on('keyup', function() {
    $(document).one('keydown', handleKeyDown(event));
})