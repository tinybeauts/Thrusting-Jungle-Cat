$(document).ready(function(){
   var current_player = 0;
   var x_moves = [];
   var o_moves = [];

    $('table').on('click','.nil' ,function(e) {
      e.preventDefault();
      $(this).removeClass('nil');

      if (current_player === 0) {
        $(this).addClass("move_o");
        $(this).css('background-color', '#E88D89');
        o_moves[o_moves.length] = [$(this).parent().children().index($(this)), $(this).closest('td').parent()[0].sectionRowIndex];
        console.log(o_moves);
        current_player = 1
      }
      else {
        $(this).addClass("move_x");
        $(this).css('background-color', '#BDDAAD');
        x_moves[x_moves.length] = [$(this).parent().children().index($(this)), $(this).closest('td').parent()[0].sectionRowIndex];
        console.log(x_moves);
        current_player = 0
      }
  }); 
});

  var checkMove = function() {
    x_moves

  }

  // checkMove.prototype.checkRow() {
  //   x_moves[]

  // }

// var player1Move = function(){
//     $(this).addClass("move_x");
//   }

// var player2Move = function(){
//   $('table tr td:not(.move_x, .move_y)').on('click', function(e){
//     e.preventDefault();
//     $(this).addClass("move_y");
//   })
// }
