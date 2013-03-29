$(document).ready(function(){
   var current_player = 0;

    $('table tr td:not(.move_x, .move_o)').on('click', function(e) {
      e.preventDefault();
      if (current_player = 0) {
        $(this).addClass("move_o");
        current_player = 1
      }
      else {
        $(this).addclass("move_x");
        current_player = 0
      }
      )
  }); 
});

// var player1Move = function(){
//     $(this).addClass("move_x");
//   }

// var player2Move = function(){
//   $('table tr td:not(.move_x, .move_y)').on('click', function(e){
//     e.preventDefault();
//     $(this).addClass("move_y");
//   })
// }
